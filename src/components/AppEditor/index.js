import { useState } from "react";
import AppEditorBlock from "./components/AppEditorBlock";
import { blockContext } from '../AppEditor/config/contexts'
import AppList from "./inputs/AppList";
import AppTable from "../AppTable";
import { useSelector } from "react-redux";

function AppEditor({ scheme, state, onAdd }) {
    const [blocks, setBlocks] = useState([{
        scheme,
        path: "",
        state: state[scheme.id],
        onSave: (x) => onAdd(scheme.id, x)
    }])

    function pushBlock(block) {
        setBlocks([...blocks, block])
    }

    function popBlock() {
        const data = [...blocks]
        data.pop()
        setBlocks(data)
    }

    return (
        <blockContext.Provider value={{ pushBlock, popBlock }}>
            <div className="editor">
                {blocks.map(x =>
                    x.scheme.type === 'list' && !!x.scheme.table ?
                        <AppTable onAdd={pushBlock} key={x.scheme.id} {...x} />
                        :
                        <AppEditorBlock key={x.scheme.id} {...x} onCancel={popBlock} />
                )}
            </div>
        </blockContext.Provider>
    )
}


export default AppEditor;

