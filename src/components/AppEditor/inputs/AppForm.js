import AppLabelCont from "../components/AppLabelCont";
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
