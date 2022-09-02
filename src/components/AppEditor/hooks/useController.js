import { useContext } from "react";
import { useSelector } from "react-redux";
import { editorContext } from "../config/contexts";
import useBlocks from "./useBlocks";

function useController(path) {
  const ctx = useContext(editorContext);
  const { pushBlock, popBlock } = useBlocks();

  const segments = path.split(".");
  const value = segments.reduce((a, c) => (c ? a?.[c] : a), ctx.state[0]);

  function setState(newValue) {
    var stack = path.split(".");

    var state = Array.isArray(ctx.state[0])
      ? [...ctx.state[0]]
      : { ...ctx.state[0] };

    var object = state;

    while (stack.length > 1) {
      object = object[stack.shift()];
    }

    if (Array.isArray(ctx.state[0])) {
      const l = object.length;
      for (let i = 0; i < l; i++) {
        object.unshift(newValue[object.length - i - 1]);
        object.pop();
      }
    } else {
      object[stack.shift()] = newValue;
    }

    ctx.state[1](state);
  }

  return {
    state: value,
    setState: setState,
    pushBlock,
    popBlock,
  };
}

export default useController;
