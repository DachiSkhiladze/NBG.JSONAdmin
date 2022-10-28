import scheme from "./scheme.json";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import defaultContent from "./assets/content.json";
import { SET_CONTENT, SET_LANGUAGE } from "./redux/actions";
import AppEditor from "./components/AppEditor";
import AppSiderbar from "./components/AppSidebar";
import React, { useEffect } from "react";
import AppPublish from "./components/AppPublish";
import { AppLoader } from "./hooks/useFiles";
import AppTranslations from "./components/AppTranslations";
import useConfig from "./hooks/useConfig";

const routes = [
  { id: "translations", label: "თარგმნა", component: AppTranslations },
  { id: "publish", label: "გამოქვეყნება", component: AppPublish },
];

function App() {
  const { upload, loading } = useConfig();
  const dispatch = useDispatch();

  const {
    content,
    language,
    scheme: currentScheme,
  } = useSelector((x) => x || {});

  useEffect(() => {
    const lang = localStorage.getItem("lang");

    dispatch(SET_LANGUAGE(lang || "Ge"));
  }, []);

  function onSave(id, value, callback) {
    const newContent = { ...content, [id]: value };

    dispatch(SET_CONTENT(newContent));
    upload(callback);
  }

  function render() {
    const item = routes.find((x) => x.id === route);
    if (item) {
      return React.createElement(item.component, { onSave, loading });
    } else if (content && currentScheme && language) {
      return (
        <AppEditor
          loading={loading}
          scheme={currentScheme}
          state={content}
          onSave={onSave}
        />
      );
    } else {
      return null;
    }
  }

  let route = window.location.pathname.replace("/", "");

  return (
    <div className="container">
      <AppSiderbar list={[...scheme.data, ...routes]} />
      {render()}
    </div>
  );
}

export default App;
