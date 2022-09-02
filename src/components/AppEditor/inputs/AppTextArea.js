import { useSelector } from "react-redux";
import AppLabelCont from "../components/AppLabelCont";
import AppLangauageChooser from "../components/AppLanguageChooser";
import useController from "../hooks/useController";

function AppTextArea({ scheme, path }) {
  const { setState, state } = useController(path);
  const language = useSelector((x) => x.language);

  function onChange({ target }) {
    setState({ ...state, [language]: target.value });
  }

  return (
    <AppLabelCont label={scheme.id} fullWidth>
      <div className="keyboard-input auto-height">
        <textarea type={"text"} onChange={onChange} value={state?.[language]} />
        <AppLangauageChooser />
      </div>
    </AppLabelCont>
  );
}

export default AppTextArea;
