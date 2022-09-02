import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../../App.scss";
import rootScheme from "../../scheme.json";
import useController, { useTable } from "../AppEditor/hooks/useController";
import functions from "./functions";

function AppTable({ scheme, path, disabled, onSave }) {
  const { state, pushBlock, setState } = useController(path);

  useSelector((x) => x.language);

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
        function: x.type === "text" || x.type === "textarea" ? "text" : x.type === "list" ? "count" : "",
      }));

  const data = state.map((x, i) =>
    table.map((y) =>
      y.function
        ? functions[y.function]({
            state: state[i],
            scheme: rootScheme,
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

  function onEditPress(index) {
    pushBlock({
      scheme: { ...scheme, type: "form" },
      path: "",
      state: state[index],
      onSave: (item) => handleSave(item, index),
    });
  }

  const titles = table.map((x) => x.label);

  return (
    <div className={"table-cont"}>
      <table>
        <thead>
          <tr>
            <th></th>
            {titles.map((title) => (
              <th key={title}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr onClick={() => onEditPress(i)} key={i}>
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
