import AppLabelCont from "../components/AppLabelCont";
import useController from "../hooks/useController";

function AppNumberInput({ scheme, path }) {
    const { setState, state } = useController(path);

    function onChange({ target }) {
        setState(target.value)
    }
    
    return (
        <AppLabelCont label={scheme.id}>
            <input type={'number'} onChange={onChange} value={state} />
        </AppLabelCont>
    )
}

export default AppNumberInput