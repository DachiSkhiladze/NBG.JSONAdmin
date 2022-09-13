import React, { useState } from "react";
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
        label: x.id,
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

  function handleSave(item, index) {
    const newState = [...state];
    newState[index] = item;
    setState(newState);
  }

  React.useEffect(() => {
    onSave(state);
  }, [state]);

  React.useEffect(() => {
    setSortIndex(-1);
  }, [scheme]);

  const onEditPress = (index) => {
    // alert(index);
    pushBlock({
      scheme: { ...scheme, type: "form" },
      path: "",
      state: state[index],
      onDelete: () => {
        setState([...state.filter((_, i) => index !== i)]);
      },
      onSave: (item) => handleSave(item, index),
    });
  };

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
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, i) => (
            <tr onClick={() => onEditPress(i)} key={`${i}_${lang}`}>
              <td>{i + 1}</td>
              {item.map((detail, j) => (
                <td key={j}>{detail}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppTable;
