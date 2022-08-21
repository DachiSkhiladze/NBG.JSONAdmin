import React, { useState } from "react";
import inputTypes from "../inputs/index";
import { editorContext } from "../config/contexts";
import generateDefaultState from "../utils/generateDefaultValues";
import AppTable from "../../AppTable";
import useBlocks from "../hooks/useBlocks";

function AppEditorBlock({ scheme, state: currentState, onSave, onCancel }) {
  const [state, setState] = useState(
    currentState || generateDefaultState(scheme)
  );

  function onSaveClick() {
    onSave(state);
    onCancel?.();
  }

  return (
    <div className="AppEditorBlock">
      <editorContext.Provider value={{ state: [state, setState] }}>
          {onCancel && <button onClick={onCancel}>cancel</button>}
          <button onClick={onSaveClick}>save</button>
          <div>
            {scheme.fields.map((x) => (
              <div key={x.id}>
                {inputTypes[x.type]?.({ scheme: x, path: x.id })}
              </div>
            ))}
          </div>
      </editorContext.Provider>
    </div>
  );
}

export default AppEditorBlock;
