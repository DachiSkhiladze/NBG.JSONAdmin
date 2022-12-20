import { v4 as uuidv4 } from "uuid";

const defaultValues = {
  text: () => ({ En: "", Ge: "" }),
  number: () => 0,
  multi_selector: () => [],
  selector: () => "0",
  list: () => [],
  bool: () => false,
  creatable_selector: () => [],
  // form: () => ({}),
  guid: () => uuidv4(),
};

function generateDefaultState(scheme) {
  let res = scheme.default || defaultValues[scheme.type]?.();

  if (scheme.type === "form") {
    res = {};
    scheme.fields.forEach((x) => {
      res[x.id] = scheme.default || generateDefaultState(x);
    });
  }

  return res;
}

export default generateDefaultState;
