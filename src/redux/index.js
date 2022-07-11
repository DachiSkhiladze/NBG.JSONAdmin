import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    content: {
    }
}

const actionType = {
    SET_CONTENT: 'SET_CONTENT',
    REMOVE_STATE: 'REMOVE_STATE',
}


export function INCREMENT() {
    return async (dispatch, getState) => {
        const data = { ...getState().content }
        console.log(data)
        if (data.index != undefined) {
            data.index += 1
            console.log(data, 'hello')
            dispatch({
                type: 'SET_CONTENT',
                data: { index: data.index }
            })
        } else {
            dispatch({
                type: 'SET_CONTENT',
                data: { index: 0 }
            })
        }
    }
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
const store = configureStore({ reducer: rootReducer }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store