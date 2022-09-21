import React from "react";
import Select from "react-select";
import AppLabelCont from "../components/AppLabelCont";
import useController from "../hooks/useController";
import useImages from "../hooks/useImages";
import useMultiSelector from "../hooks/useMultiSelector";

const customStyles = {
  control: (base) => ({
    ...base,
    // height: 40,
    minHeight: 40,
    width: 120,
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  }),
};

function AppImagePicker({ scheme, path }) {
  const { setState, state } = useController(path);
  const images = useImages();

  function onChange(p) {
    setState(p.value);
  }

  React.useEffect(() => {
    // setState([options[0].value]);
  }, []);

  return (
    <AppLabelCont label={scheme.id} {...scheme} fullWidth>
      <Select
        options={images}
        components={{
          Option: Option,
          MenuList: MenuList,
          ValueContainer: ValueContainer,
        }}
        value={images?.find((x) => x.value === state)}
        onChange={onChange}
        styles={customStyles}
      />
    </AppLabelCont>
  );
}

const MenuList = ({ value, label, children }) => (
  <div style={{ display: "flex" }} className={"menu-list"}>
    {children}
  </div>
);
const Option = ({ value, label, customAbbreviation, ...props }) => {
  function onClick() {
    props.setValue({ value, label }, "select-option");
  }
  return (
    <div onClick={onClick} className={"image-option"}>
      <img src={label} alt={label} />
    </div>
  );
};
const ValueContainer = ({ ...props }) => {
  return (
    <div className={"image-option"}>
      <img src={props.getValue()?.[0]?.label} />
    </div>
  );
};

export default AppImagePicker;
