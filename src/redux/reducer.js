const initialState = {
  content: null,
  scheme: null,
  editorState: null,
  language: null,
};

export const actionType = {
  SET_CONTENT: "SET_CONTENT",
  SET_SCHEME: "SET_SCHEME",
  SET_LANGUAGE: "SET_LANGUAGE",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actionType.SET_CONTENT: {
      return { ...state, content: action.data };
    }
    case actionType.SET_SCHEME: {
      return { ...state, scheme: action.data };
    }
    case actionType.SET_LANGUAGE: {
      return { ...state, language: action.data };
    }
    default:
      return state;
  }
}

export default rootReducer;
