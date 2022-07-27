function AppLabelCont({ children, label, onAdd, onEdit, onDelete }) {
    return (
        <div>
            <span>{label}</span>
            {onAdd && <button onClick={onAdd}>add</button>}
            {onEdit && <button onClick={onEdit}>edit</button>}
            {onDelete && <button onClick={onDelete}>delete</button>}
            {children}
        </div>
    )
}

export default AppLabelCont