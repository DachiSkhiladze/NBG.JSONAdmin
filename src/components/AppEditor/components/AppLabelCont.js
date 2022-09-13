function AppLabelCont({
  children,
  label,
  onAdd,
  fullWidth,
  onEdit,
  disabled,
  onDelete,
}) {
  return (
    <div
      className={`label-cont ${fullWidth ? "full-width" : ""} ${
        disabled ? "disabled" : ""
      }`}
    >
      <span className="label">{label}</span>
      {/* {onAdd && <button onClick={onAdd}>add</button>} */}
      {onEdit && <button onClick={onEdit}>edit</button>}
      {onDelete && <button onClick={onDelete}>delete</button>}
      {children}
    </div>
  );
}

export default AppLabelCont;
