import AppLabelCont from "../components/AppLabelCont";
import AppList from "./AppList";
import AppMultiSelect from "./AppMultiSelector";
import AppNumberInput from "./AppNumberInput";
import AppTextInput from "./AppTextInput";

function AppForm({ scheme, path = "" }) {
  return (
    <AppLabelCont label={scheme.id}>
      {scheme.fields.map((x) => (
        <div key={x.id}>
          {inputTypes[x.type]?.({
            scheme: x,
            path: path + "." + x.id,
          })}
        </div>
      ))}
    </AppLabelCont>
  );
}

const inputTypes = {
  text: (p) => <AppTextInput {...p} />,
  number: (p) => <AppNumberInput {...p} />,
  multi_selector: (p) => <AppMultiSelect {...p} />,
  selector: (p) => <AppMultiSelect {...p} />,
  list: (p) => <AppList {...p} />,
  form: (p) => <AppForm {...p} />,
};

export default inputTypes;
