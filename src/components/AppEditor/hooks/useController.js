import { useContext } from "react";
import { editorContext } from "../config/contexts";
import useBlocks from "./useBlocks";

function useController(path) {
    const ctx = useContext(editorContext);
    const { pushBlock, popBlock } = useBlocks();

    const segments = path.split('.');

    const value = segments.reduce((a, c) => a[c], ctx.state[0])

    function setState(newValue) {
        var stack = path.split('.');

        var object = ctx.state[0]

        while (stack.length > 1) {
            object = object[stack.shift()];
        }

        object[stack.shift()] = newValue;

        ctx.state[1]({ ...ctx.state[0] })
    }

    return {
        state: value,
        setState: setState,
        pushBlock,
        popBlock
    };
}

export default useController