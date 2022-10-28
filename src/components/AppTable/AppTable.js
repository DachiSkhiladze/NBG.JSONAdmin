import React, { useState } from "react";
import { FaClone } from "react-icons/fa";
import { useSelector } from "react-redux";
import "../../App.scss";
import rootScheme from "../../scheme.json";
import useController, { useTable } from "../AppEditor/hooks/useController";
import functions from "./functions";

function AppTable({ scheme, path, disabled, onSave }) {
  const { state, pushBlock, setState } = useController(path);

  const lang = useSelector((x) => x.language);
  const content = useSelector((x) => x.content);

  const [sortIndex, setSortIndex] = React.useState(-1);
  const [sortDir, setSortDir] = React.useState(1);

  const table =
    scheme.table ||
    scheme.fields
      .filter(
        (x) =>
          x.type !== "guid" &&
          x.type !== "selector" &&
          x.type !== "form" &&
          x.type !== "multi_selector"
      )
      .map((x) => ({
        label: x.label || x.id,
        id: x.id,
        function:
          x.type === "text" || x.type === "textarea"
            ? "text"
            : x.type === "list"
            ? "count"
            : "",
      }));

  const data = state.map((x, i) =>
    table.map((y) =>
      y.function
        ? functions[y.function]({
            state: state[i],
            scheme: rootScheme,
            content,
            ...y,
          })
        : x[y.id]
    )
  );

  function handleSave(item, index, callback) {
    const newState = [...state];
    newState[index] = item;
    setState(newState);
    onSave(newState, callback);
  }

  React.useEffect(() => {
    setSortIndex(-1);
  }, [scheme]);
 

  const onEditPress = (s, index) => {
    if (s.target.tagName.toLowerCase() !== "td") {
      return;
    }
    pushBlock({
      scheme: { ...scheme, type: "form" },
      path: "",
      state: JSON.parse(JSON.stringify(state[index])),
      onDelete: () => {
        const data = [...state.filter((_, i) => index !== i)];
        setState(data);
        onSave(data);
      },
      onSave: (item, callback) => {
        handleSave(item, index, callback);
      },
    });
  };

  function onClone(e, index) {
    e.preventDefault();
    setState([JSON.parse(JSON.stringify(state[index])), ...state]);
  }

  function onSortPress(i) {
    return;

    if (sortIndex === i) {
      setSortDir(sortDir === -1 ? 1 : -1);
    } else {
      setSortDir(1);
    }

    setSortIndex(i);
  }

  function sort(a, b) {
    let i = 0;

    let valueA = a.replace?.("₾", "").replace(",", "");
    let valueB = b.replace?.("₾", "").replace(",", "");

    if (!isNaN(+a)) {
      i = a - b;
    } else if (!isNaN(+valueA)) {
      i = valueA - valueB;
    } else {
      i = a[0].toLowerCase() > b[0].toLowerCase() ? -1 : 1;
    }

    return sortDir * i;
  }

  const titles = table.map((x) => x.label);

  const sortedData =
    sortIndex === -1
      ? data
      : [...data].sort((a, b) => sort(a[sortIndex], b[sortIndex]));

  return (
    <div className={"table-cont"}>
      <table>
        <thead>
          <tr>
            <th></th>
            {titles.map((title, i) => (
              <th onClick={() => onSortPress(i)} key={title}>
                {title}
              </th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, i) => (
            <tr onClick={(s) => onEditPress(s, i)} key={`${i}_${lang}`}>
              <td>{i + 1}</td>
              {item.map((detail, j) => (
                <td key={j}>{detail}</td>
              ))}
              <td>
                <button className="clone-icon" onClick={(e) => onClone(e, i)}>
                  <FaClone />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppTable;
