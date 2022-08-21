function AppObjectField({ label, value }) {
  return (
    <div>
      <span>{label}</span>
      <span>{value?.toString()}</span>
    </div>
  );
}

export default AppObjectField;
