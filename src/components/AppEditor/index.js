import React, { useState } from "react";
import AppEditorBlock from "./components/AppEditorBlock";
import { blockContext } from "../AppEditor/config/contexts";

function AppEditor({ scheme, state, onSave }) {
  const scrollEndRef = React.useRef();
  const fref = React.useRef();

  const block = {
    scheme,
    path: "",
    onSave: (st) => {
      onSave(scheme.id, st);
    },
    type: scheme.type === "list" ? "table" : "form",
    state: state[scheme.id],
  };

  const [blocks, setBlocks] = useState([block]);

  function pushBlock(newBlock) {
    setBlocks([...blocks, newBlock]);
  }

  React.useEffect(() => {
    scrollEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [blocks]);

  function popBlock() {
    fref.current.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      const data = [...blocks];
      data.pop();
      setBlocks(data);
    }, 600);
  }

  React.useEffect(() => {
    setBlocks([]);
  }, [scheme]);

  React.useEffect(() => {
    if (blocks.length === 0) {
      setBlocks([block]);
    }
  }, [blocks]);

  React.useEffect(() => {
    if (blocks.length === 1) {
      setBlocks([block, ...blocks.slice(1)]);
    }
  }, [state]);

  return (
    <blockContext.Provider value={{ pushBlock, popBlock }}>
      <div className="editor">
        {/* <div className="editor-spacer" /> */}

        {blocks.map((x, i) => (
          <AppEditorBlock
            disabled={blocks.length - 1 !== i}
            key={i}
            {...x}
            fref={fref}
            onAdd={pushBlock}
            showScrollBack={i === blocks.length - 2}
            onCancel={i === 0 ? null : popBlock}
          />
        ))}
        <div ref={scrollEndRef} />
      </div>
    </blockContext.Provider>
  );
}

export default AppEditor;
