import { useDispatch, useSelector } from "react-redux";
import { SET_LANGUAGE } from "../../../redux/actions";

export default function AppLangauageChooser() {
  const lang = useSelector((x) => x.language);
  const dispatch = useDispatch();

  function onPress(lang) {
    dispatch(SET_LANGUAGE(lang));
  }
  
  return (
    <div className="language-chooser">
      <button onClick={()=>onPress('Ge')} className={lang === "Ge" ? "active" : ""}>Ge</button>
      <span>|</span>
      <button onClick={()=>onPress('En')} className={lang === "En" ? "active" : ""}>En</button>
    </div>
  );
}
