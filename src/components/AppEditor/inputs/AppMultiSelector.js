import React from "react";
import Select from "react-select";
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

function AppMultiSelect({ scheme, path }) {
  const { setState, state, formState } = useController(path);
  const { options } = useMultiSelector(scheme, path, formState);

  function onChange(p) {
    setState(p.map((x) => x.value));
  }

  React.useEffect(() => {
    // setState([options[0].value]);
  }, []);

  return (
    <AppLabelCont label={scheme.id} {...scheme} fullWidth>
      <Select
        options={options}
        isMulti
        value={state?.map((x) => ({
          label: options?.find((o) => o.value == x).label,
          value: x,
        }))}
        isOptionSelected={
          scheme.sameId
            ? (option, selectValue) => selectValue.some((i) => i === option)
            : undefined
        }
        onChange={onChange}
        styles={customStyles}
      />
    </AppLabelCont>
  );
}

export default AppMultiSelect;
