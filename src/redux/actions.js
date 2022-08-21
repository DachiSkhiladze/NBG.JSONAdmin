import { actionType } from "./reducer";

export function SET_CONTENT(content) {
  return {
    type: actionType.SET_CONTENT,
    data: content,
  };
}

export function SET_LANGUAGE(lang) {
  localStorage.setItem("lang", lang);
  return {
    type: actionType.SET_LANGUAGE,
    data: lang,
  };
}
