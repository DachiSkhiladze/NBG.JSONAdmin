import React from "react";
import AppLabelCont from "../components/AppLabelCont";
import useController from "../hooks/useController";
import useMultiSelector from "../hooks/useMultiSelector";

function AppMultiSelect({ scheme, path }) {
  const { setState, state } = useController(path);
  const { options } = useMultiSelector(scheme, path);

  function onChange({ target }) {
    console.log([...target.selectedOptions].map((x) => x.value));
    setState([...target.selectedOptions].map((x) => x.value));
  }

  React.useEffect(() => {
    setState([options[0].value]);
  }, []);

  return (
    <AppLabelCont label={scheme.id}>
      <select multiple value={state} onChange={onChange}>
        {options.map((x) => (
          <option value={x.value}>{x.label}</option>
        ))}
      </select>
    </AppLabelCont>
  );
}

export default AppMultiSelect;
