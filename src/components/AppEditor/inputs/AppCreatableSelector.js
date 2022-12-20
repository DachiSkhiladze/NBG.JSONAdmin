import React from "react";
import Select from "react-select/creatable";
import AppLabelCont from "../components/AppLabelCont";
import useController from "../hooks/useController";
import useMultiSelector from "../hooks/useMultiSelector";

const customStyles = {
  control: (base) => ({
    ...base,
    // height: 40,
    minHeight: 40,
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  }),
};

function AppCreatableSelector({ scheme, path }) {
  const { setState, state } = useController(path);

  function onChange(p) {
    setState(p.map((x) => x.value));
  }

  React.useEffect(() => {
    setState([]);
  }, []);

  console.log(state);

  return (
    <AppLabelCont label={scheme.id} {...scheme} fullWidth>
      <Select
        isMulti
        value={state?.map((x) => ({
          label: x,
          value: x,
        }))}
        onChange={onChange}
        styles={customStyles}
      />
    </AppLabelCont>
  );
}

export default AppCreatableSelector;
