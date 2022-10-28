import { useSelector } from "react-redux";
import AppLabelCont from "../components/AppLabelCont";
import AppLangauageChooser from "../components/AppLanguageChooser";
import useController from "../hooks/useController";

function AppInput({ scheme, path }) {
  const { setState, state } = useController(path);
  

  function onChange({ target }) {
    setState(state);
  }

  return (
    <AppLabelCont label={scheme.id} {...scheme}>
      <div className="keyboard-input">
        <input type={"text"} disabled onChange={onChange} value={state} />
      </div>
    </AppLabelCont>
  );
}

export default AppInput;
