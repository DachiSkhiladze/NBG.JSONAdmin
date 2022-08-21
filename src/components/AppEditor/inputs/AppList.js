import AppLabelCont from "../components/AppLabelCont";
import AppObject from "../components/AppObject";
import useController from "../hooks/useController";

function AppList({ scheme, path }) {
  const { state, setState, pushBlock } = useController(path);

  function onAdd() {
    pushBlock({ scheme, onSave });
  }

  function onSave(item) {
    setState([...state, item]);
  }

  function onEdit(index) {
    pushBlock({
      scheme,
      state: state[index],
      onSave: (item) => {
        const newState = [...state];
        newState[index] = item;
        setState(newState);
      },
    });
  }

  function onDelete(index) {
    const newState = [...state].splice(index, 0);
    setState(newState);
  }

  return (
    <AppLabelCont label={scheme.id} onAdd={onAdd}>
      {state?.map((x, i) => (
        <AppObject
          key={`${x.id}_${i}`}
          index={i}
          onEdit={onEdit}
          onDelete={onDelete}
          scheme={scheme}
          path={path + `.${i}`}
        />
      ))}
    </AppLabelCont>
  );
}

export default AppList;
