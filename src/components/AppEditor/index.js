import React, { useState } from "react";
import AppEditorBlock from "./components/AppEditorBlock";
import { blockContext } from "../AppEditor/config/contexts";
import AppList from "./inputs/AppList";
import AppTable from "../AppTable";
import { useSelector } from "react-redux";
import './index.scss'

function AppEditor({ scheme, state, onSave }) {
  const block = {
    scheme,
    path: "",
    onSave,
    state: state[scheme.id],
  };

  const [blocks, setBlocks] = useState([]);

  function pushBlock(block) {
    setBlocks([...blocks, block]);
  }

  function popBlock() {
    const data = [...blocks];
    data.pop();
    setBlocks(data);
  }

  React.useEffect(() => {
    setBlocks([]);
  }, [scheme]);

  return (
    <blockContext.Provider value={{ pushBlock, popBlock }}>
      <div className="editor">
        {scheme.type === "list" && !!scheme.table ? (
          <div className="TableDisplay">
            <AppTable onAdd={pushBlock} key={scheme.id} {...block} />
          </div>
        ) : (
          <AppEditorBlock key={scheme.id} {...block} />
        )}
        <div className="AppEditorsContainer">
          <div className="EditorDisplay">
            {blocks.map((x) => (
              <AppEditorBlock key={x.scheme.id} {...x} onCancel={popBlock} />
            ))}
          </div>
        </div>

      </div>
    </blockContext.Provider>
  );
}

export default AppEditor;
