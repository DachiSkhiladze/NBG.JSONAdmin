import { async } from "@firebase/util";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import {
  deleteObject,
  getBytes,
  listAll,
  ref,
  updateMetadata,
  uploadString,
} from "firebase/storage";
import React from "react";
import { useDispatch } from "react-redux";
import generateDefaultState from "../components/AppEditor/utils/generateDefaultValues";
import { db, storage } from "../firebase";
import { SET_CONTENT } from "../redux/actions";
import scheme from "../scheme.json";

function useConfig() {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const config = React.useRef();

  React.useEffect(() => {
    loadAsync();
    const unsub = addListener();
    return () => unsub();
  }, []);

  function addListener() {
    const unsub = onSnapshot(doc(db, "Configs", "Config"), (doc) => {
      console.log("first");
      loadAsync();
      config.current = doc.data();
    });
    return unsub;
  }

  async function loadAsync() {
    const list = await listAll(ref(storage, "/"));

    const file = list.items.find((x) => x.name.includes("content_"));

    if (file == null) {
      dispatch(SET_CONTENT({}));
      return;
    }

    var cloudDate = +file.name.replace("content_", "").replace(".json", "");
    var localDate = +localStorage.getItem("content_date");

    if (isNaN(localDate) && isNaN(cloudDate)) {
      dispatch(SET_CONTENT({}));
      return;
    }

    let content = {};

    if (localDate < cloudDate) {
      const bytes = await getBytes(ref(storage, file.name));
      var decoder = new TextDecoder();
      const str = decoder.decode(bytes);
      content = JSON.parse(str);
      localStorage.setItem("content_date", cloudDate);
    } else {
      content = JSON.parse(localStorage.getItem("content"));
      dispatch(SET_CONTENT(content));
    }

    localStorage.setItem("content", JSON.stringify(content));
    console.log(content);
    console.log(fix(content, { fields: scheme.data }));

    dispatch(
      SET_CONTENT({
        ...content,
        ...fix(content, { fields: scheme.data, type: "form" }),
      })
    );
  }

  async function upload(callback) {
    setLoading(true);

    const content = localStorage.getItem("content");

    var localDate = +localStorage.getItem("content_date");

    const date = Date.now();

    const list = await listAll(ref(storage, "/"));

    const files = list.items.filter((x) => x.name.includes("content_"));

    for (let file of files) {
      await deleteObject(ref(storage, file.name));
    }

    await uploadString(ref(storage, "content_" + date + ".json"), content);
    await uploadString(
      ref(storage, "archive/content_" + date + ".json"),
      content
    );

    localStorage.setItem("content_date", date);

    config.current = {
      ...config.current,
      versionPrivate: config.current?.versionPrivate
        ? config.current?.versionPrivate + 1
        : 1,
    };

    await setDoc(doc(db, "Configs", "Config"), config.current);

    setLoading(false);
    callback?.();
  }

  return { upload, loading };
}

function fix(state, scheme) {
  if (scheme.type === "list") {
    return state.map((x) => fix(x, { ...scheme, type: "form" }));
  } else if (scheme.fields) {
    return scheme.fields.reduce(
      (a, c) => ({
        ...a,
        [c.id]: state[c.id] !== undefined ? fix(state[c.id], c) : generateDefaultState(c),
      }),
      {}
    );
  } else {
    if (state === undefined) {
      state = generateDefaultState(scheme);
    }
    return state;
  }
}

export default useConfig;
