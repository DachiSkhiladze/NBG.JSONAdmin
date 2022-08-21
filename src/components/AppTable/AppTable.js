import { useSelector } from "react-redux";
import "../../App.scss";
import rootScheme from "../../scheme.json";
import functions from "./functions";

function AppTable({ onAdd, scheme, path, onSave, state }) {
  const lang = useSelector((x) => x.language);
  const data = state.map((x, i) =>
    scheme.table.map((y) =>
      y.function
        ? functions[y.function]({
            state: state[i],
            scheme: rootScheme,
            ...y,
          })
        : x[y.id]
    )
  );

  const titles = scheme.table.map((x) => x.label);

  function onAddClick() {
    onAdd({
      scheme: {
        ...scheme,
        type: "form",
      },
      onSave: (x) => {
        onSave(scheme.id, [...state, x]);
      },
      path: path,
    });
  }

  return (
    <div className="table-cont">
      <button onClick={onAddClick}>Add</button>
      <table>
        <tr>
          <th></th>
          {titles.map((title) => (
            <th>{title}</th>
          ))}
        </tr>
        {data.map((item, i) => (
          <tr>
            <td>{i + 1}</td>
            {item.map((detail) => (
              <td>{detail}</td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
}

export default AppTable;
