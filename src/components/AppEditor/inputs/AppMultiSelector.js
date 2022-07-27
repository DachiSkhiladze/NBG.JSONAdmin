import AppLabelCont from "../components/AppLabelCont";
import useController from "../hooks/useController";

function AppMultiSelect({ scheme, path }) {
    const { setState, state } = useController(path);

    function onChange({ target }) {
        setState([...target.selectedOptions].map(x => x.value))
    }

    return (
        <AppLabelCont label={scheme.id}>
            <select multiple value={state} onChange={onChange}>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
        </AppLabelCont>
    );
}

export default AppMultiSelect