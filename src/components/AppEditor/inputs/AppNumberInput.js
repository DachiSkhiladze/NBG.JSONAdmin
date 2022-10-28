import AppLabelCont from "../components/AppLabelCont";
import useController from "../hooks/useController";

function AppNumberInput({ scheme, path }) {
  const { setState, state } = useController(path);

  function onChange({ target }) {
    if (isNaN(+target.value)) {
      setState(0);
    } else {
      setState(target.value);
    }
  }

  return (
    <AppLabelCont label={scheme.id} {...scheme}>
      <div className="keyboard-input">
        <input
          type={"number"}
          placeholder="0"
          onChange={onChange}
          value={state || null}
        />
      </div>
    </AppLabelCont>
  );
}

export default AppNumberInput;
