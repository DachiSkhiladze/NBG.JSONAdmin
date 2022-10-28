import React from "react";
import AppLabelCont from "../components/AppLabelCont";
import useController from "../hooks/useController";
import generateDefaultState from "../utils/generateDefaultValues";
import { inputTypes } from "./index";

export default function AppForm({ scheme, path = "" }) {
  return (
    <AppLabelCont label={scheme.id} {...scheme} fullWidth>
      <div className="form-cont">
        {scheme.fields.map((x) =>
          inputTypes[x.type]?.({
            scheme: x,
            path: path + "." + x.id,
            key: x.id,
          })
        )}
      </div>
    </AppLabelCont>
  );
}
