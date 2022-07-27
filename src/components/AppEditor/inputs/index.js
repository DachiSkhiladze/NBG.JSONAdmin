import AppList from "./AppList"
import AppMultiSelect from "./AppMultiSelector"
import AppNumberInput from "./AppNumberInput"
import AppTextInput from "./AppTextInput"

const inputTypes = {
    'text': (p) => <AppTextInput {...p} />,
    'number': (p) => <AppNumberInput {...p} />,
    'multi_selector': (p) => <AppMultiSelect {...p} />,
    'list': (p) => <AppList {...p} />
}

export default inputTypes