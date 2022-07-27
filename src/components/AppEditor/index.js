import { useState } from "react";
import AppEditorBlock from "./components/AppEditorBlock";
import { blockContext } from '../AppEditor/config/contexts'

function AppEditor({ scheme }) {
    const [blocks, setBlocks] = useState([{
        scheme,
        onSave: (x) => console.log(x)
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
                    <AppEditorBlock key={x.scheme.id} {...x} onCancel={popBlock} />
                )}
            </div>
        </blockContext.Provider>
    )
}


export default AppEditor;

