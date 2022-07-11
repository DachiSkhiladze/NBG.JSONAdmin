import { actionType } from "./reducer";

export function SET_CONTENT(content) {
    return {
        type: actionType.SET_CONTENT,
        data: content
    }
}