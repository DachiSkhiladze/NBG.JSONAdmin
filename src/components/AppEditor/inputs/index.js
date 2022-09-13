import AppCreatableSelector from "./AppCreatableSelector";
import AppForm from "./AppForm";
import AppInput from "./AppInput";
import AppList from "./AppList";
import AppMultiSelect from "./AppMultiSelector";
import AppNumberInput from "./AppNumberInput";
import AppSelctor from "./AppSelector";
import AppTextArea from "./AppTextArea";
import AppTextInput from "./AppTextInput";

export const inputTypes = {
  text: (p) => <AppTextInput {...p} />,
  guid: (p) => <AppInput {...p} />,
  textarea: (p) => <AppTextArea {...p} />,
  number: (p) => <AppNumberInput {...p} />,
  multi_selector: (p) => <AppMultiSelect {...p} />,
  creatable_selector: (p) => <AppCreatableSelector {...p} />,
  selector: (p) => <AppSelctor {...p} />,
  list: (p) => <AppList {...p} />,
  form: (p) => <AppForm {...p} />,
};

export default inputTypes;
