import AppLabelCont from "../components/AppLabelCont";
import useController from "../hooks/useController";

function AppTextInput({ scheme, path }) {
    const { setState, state } = useController(path);

    function onChange({ target }) {
        setState({ 'En': target.value })
    }

    return (
        <AppLabelCont label={scheme.id}>
            <input type={'text'} onChange={onChange} value={state?.['En']} />
        </AppLabelCont>
    )
}

export default AppTextInput