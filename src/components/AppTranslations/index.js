import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AppEditor from "../AppEditor";

const scheme = {
  id: "Translations",
  type: "list",
  label: "ინტერფეისი თარგმნა",
  fields: [
    {
      id: "Key",
      type: "string",
    },
    {
      id: "En",
      label: "ინგლისური",
      type: "string",
    },
    {
      id: "Ge",
      label: "ქართული",
      type: "string",
    },
  ],
};

export default function AppTranslations() {
  const state = useSelector((x) => x.translations);
  const dispatch = useDispatch();

  function onSave(id, value) {
    const translations = {
      en: value.reduce((a, c) => ({ ...a, [c.Key]: c.En }), {}),
      ge: value.reduce((a, c) => ({ ...a, [c.Key]: c.Ge }), {}),
    };
    dispatch({ type: "SET_TRANSLATIONS", data: translations });
  }

  const stateValue = !state
    ? null
    : Object.keys(state?.["en"]).map((x) => ({
        Key: x,
        En: state["en"][x],
        Ge: state["ge"][x],
      }));

  return (
    stateValue && (
      <AppEditor
        scheme={scheme}
        state={{ Translations: stateValue }}
        onSave={onSave}
      />
    )
  );
}
