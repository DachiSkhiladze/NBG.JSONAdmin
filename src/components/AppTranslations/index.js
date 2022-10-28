import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_CONTENT } from "../../redux/actions";
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

export default function AppTranslations({ onSave, loading }) {
  const content = useSelector((x) => x.content);
  const state = content?.translations || {};
  console.log(state);

  const dispatch = useDispatch();

  function onSavePress(id, value, callback) {
    const translations = {
      en: value.reduce((a, c) => ({ ...a, [c.Key]: c.En }), {}),
      ge: value.reduce((a, c) => ({ ...a, [c.Key]: c.Ge }), {}),
    };
    onSave("translations", translations, callback);
  }

  if (!content) {
    return null;
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
        loading={loading}
        scheme={scheme}
        state={{ Translations: stateValue }}
        onSave={onSavePress}
      />
    )
  );
}
