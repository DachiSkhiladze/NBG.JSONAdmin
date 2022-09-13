import { useDispatch, useSelector } from "react-redux";
import { initializeApp } from "firebase/app";
import { getStorage, ref, getBytes, uploadString } from "firebase/storage";
import {
  collection,
  setDoc,
  doc,
  getDoc,
  getFirestore,
} from "firebase/firestore";
import React from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAqeGsTbcwNA83TBBQ-QOd0swZ7onC4vnk",
  authDomain: "nbg-game.firebaseapp.com",
  projectId: "nbg-game",
  storageBucket: "nbg-game.appspot.com",
  messagingSenderId: "1044788655921",
  appId: "1:1044788655921:web:5f808ccf3141f22aaea210",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();
const storage = getStorage();

const files = [
  {
    name: "content",
    action: "SET_CONTENT",
  },
  {
    name: "translations",
    action: "SET_TRANSLATIONS",
  },
];

function useFiles() {
  const [config, setConfig] = React.useState(
    JSON.parse(localStorage.getItem("config"))
  );
  const [loadings, setLoadings] = React.useState({});

  const state = useSelector((x) => x);

  async function load() {
    if (!config) {
      const data = await getDoc(doc(db, "Configs", "Config"));
      const result = data.data();
      setConfig(result);
    }
  }

  React.useEffect(() => {
    if (config) {
      localStorage.setItem("config", JSON.stringify(config));
    }
  }, [config]);

  React.useEffect(() => {
    load();
  }, []);

  function updateVersion(version) {
    const strs = version.split(".");
    const lastVersion = +strs[strs.length - 1];
    return "0.0." + (lastVersion + 1);
  }

  async function publish(name, file) {
    setLoadings((x) => ({ ...x, [name]: true }));
    try {
      const data = state[name];
      await uploadString(ref(storage, name + ".json"), JSON.stringify(data));
      await updateFile(name);
      onReset(name)();
    } catch (e) {
      console.log(e);
    }
    setLoadings((x) => ({ ...x, [name]: false }));
  }

  async function updateFile(name) {
    const data = { ...config };
    const i = data.Files.findIndex((x) => x.Name === name + ".json");
    const newVersion = updateVersion(data.Files[i].Version);
    data.Files[i].Version = newVersion;
    try {
      await setDoc(doc(db, "Configs", "Config"), data);
      setConfig(data);
    } catch {}
  }

  function onPublish(name, file) {
    return async () => publish(name, file);
  }

  function onReset(name) {
    return () => {
      // localStorage.removeItem(name);
      localStorage.setItem(name + "_old", JSON.stringify(state[name]));
      setLoadings((x) => ({ ...x }));
    };
  }

  return files.map((x) => {
    const file = config?.Files?.find(
      (f) => f.Name.split(".json")[0] === x.name
    );

    const cacheOld = localStorage.getItem(x.name + "_old");
    const cache = localStorage.getItem(x.name);
    return {
      name: file?.Name,
      version: file?.Version,
      canPublish: cacheOld !== cache || !cache,
      publish: onPublish(x.name, file),
      loading: loadings[x.name],
      reset: onReset(x.name),
    };
  });
}

export function AppLoader() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    files.forEach((x) => {
      loadFile(x.name, x.action);
    });
  }, []);

  async function loadFile(name, action) {
    const cacheName = name;
    const cache = localStorage.getItem(cacheName);
    if (cache) {
      const data = JSON.parse(cache);
      dispatch({
        type: action,
        data,
      });
    } else {
      const bytes = await getBytes(ref(storage, name + ".json"));
      var decoder = new TextDecoder();
      const str = decoder.decode(bytes);
      const data = JSON.parse(str);
      localStorage.setItem(cacheName, str);
      localStorage.setItem(cacheName + "_old", str);
      dispatch({
        type: action,
        data,
      });
    }
  }
  return null;
}

export default useFiles;
