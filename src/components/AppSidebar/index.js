import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_LANGUAGE } from "../../redux/actions";

function AppSiderbar({ list }) {
  const dispatch = useDispatch();
  const selector = useSelector((o) => o.scheme);
  const language = useSelector((o) => o.language);

  useEffect(() => {
    let id = window.location.pathname.replace("/", "");
    if (!id) id = list[0].id;
    dispatch({ type: "SET_SCHEME", data: list.find((x) => x.id === id) });
  }, []);

  const handleClick = (e, data) => {
    window.history.replaceState(null, "", data.id);
    dispatch({ type: "SET_SCHEME", data: data });
  };

  function onLanguageClick(lang) {
    dispatch(SET_LANGUAGE(lang));
  }

  function onSyncPress() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div className="sidebar">
      <button className="sync-button" onClick={onSyncPress}>
        sync
      </button>
      <div className="language-chooser-cont">
        <button
          onClick={() => onLanguageClick("En")}
          className={language === "En" ? "active" : ""}
        >
          <span>En</span>
        </button>
        <button
          onClick={() => onLanguageClick("Ge")}
          className={language === "Ge" ? "active" : ""}
        >
          <span>Ge</span>
        </button>
      </div>
      {list?.map((data, i) => (
        <button
          onClick={(e) => handleClick(e, data)}
          key={data.id}
          className={data.id === selector?.id ? "active" : ""}
        >
          <span>{data.label || data.id}</span>
        </button>
      ))}
    </div>
  );
}

export default AppSiderbar;
