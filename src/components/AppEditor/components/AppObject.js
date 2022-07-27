import useController from "../hooks/useController";
import AppLabelCont from "./AppLabelCont";
import objectType from "./objectTypes";
import AppObjectField from './AppObjectField'

function AppObject({ path, scheme, index, onDelete, onEdit }) {
    const { state } = useController(path)

    function onDeleteClick() {
        onDelete(index)
    }

    function onEditClick() {
        onEdit(index)
    }

    return (
        <AppLabelCont onDelete={onDeleteClick} onEdit={onEditClick}>
            {scheme.fields.map(x =>
                objectType[x.type]?.({ scheme: x, path: path + '.' + x.id }) || <AppObjectField label={x.id} value={state[x.id]} />
            )}
        </AppLabelCont>
    );
}

export default AppObject