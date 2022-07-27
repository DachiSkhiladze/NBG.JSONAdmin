const initialState = {
    content: null,
    scheme: null,
    editorState: null
}

export const actionType = {
    SET_CONTENT: 'SET_CONTENT',
    SET_SCHEME: 'SET_SCHEME'
}


function rootReducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case actionType.SET_CONTENT: {
            return { ...state, content: action.data }
        }
        case actionType.SET_SCHEME: {
            return { ...state, scheme: action.data }
        }
        case actionType.REMOVE_STATE: {
            return { ...state, content: null }
        }
        default: return state
    }
}

export default rootReducer