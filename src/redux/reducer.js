const initialState = {
    content: {

    }
}

export const actionType = {
    SET_CONTENT: 'SET_CONTENT',
}


function rootReducer(state = initialState, action) {
    switch (action.type) {
        case actionType.SET_CONTENT: {
            return { ...state, content: action.data }
        }
        case actionType.REMOVE_STATE: {
            return { ...state, content: null }
        }
    }

    return state
}

export default rootReducer