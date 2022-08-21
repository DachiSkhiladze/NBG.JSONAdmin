import React from "react";
import Select from "react-select";
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
      <Select options={options} multiple value={state} onChange={onChange} />
    </AppLabelCont>
  );
}

export default AppMultiSelect;
