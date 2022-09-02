import React, { useState } from "react";
import inputTypes from "../inputs/index";
import { editorContext } from "../config/contexts";
import generateDefaultState from "../utils/generateDefaultValues";
import AppTable from "../../AppTable";
import useBlocks from "../hooks/useBlocks";

function AppEditorBlock({
  scheme,
  state: currentState,
  type,
  path,
  onSave,
  onCancel,
  onAdd,
  disabled,
  showScrollBack,
  fref,
}) {
  const [state, setState] = useState(
    currentState || generateDefaultState(scheme)
  );

  function onSaveClick() {
    onSave(state);
    onCancel?.();
  }

  function onAddPress() {
    onAdd({
      scheme: { ...scheme, type: "form" },
      path: "",
      onSave: (item) => setState([...state, item]),
    });
  }

  function getControlls() {
    if (type === "table") {
      return [
        onCancel && <button key={0} onClick={onCancel}>BACK</button>,
        <button key={1} onClick={onAddPress}>ADD</button>,
      ];
    } else {
      return [
        onCancel && <button key={0} onClick={onCancel}>CANCEL</button>,
        <button key={1} onClick={onSaveClick}>SAVE</button>,
        currentState && onCancel && <button key={2} onClick={onCancel}>DELETE</button>,
      ];
    }
  }

  return (
    <div className={`editor-block ${disabled ? "disabled" : ""}`}>
      {showScrollBack && (
        <div ref={fref} className="scroll-back" key={-1}></div>
      )}
      <editorContext.Provider value={{ state: [state, setState] }}>
        <div className="header">
          <h1>
            {onCancel && "Add"} {scheme.id}
          </h1>
          <div className="controls">{getControlls()}</div>
        </div>
        <div className="scroll">
          {type === "table" ? (
            <AppTable scheme={scheme} path={""} onSave={onSave} />
          ) : (
            <div className="form">
              {scheme.fields.map((x) =>
                inputTypes[x.type]?.({ scheme: x, path: x.id, key: x.id })
              )}
            </div>
          )}
        </div>
      </editorContext.Provider>
    </div>
  );
}

export default AppEditorBlock;
