import schemes from "../../../scheme.json";
import { useSelector } from "react-redux";

function items({ content }) {
  return content.Items.map((x) => ({
    value: x.id,
    label: x.Name["En"],
  }));
}

function cities() {
  const cities = schemes.constants.cities;
  return Object.keys(cities).map((x) => ({ value: x, label: cities[x] }));
}

function houseTypes() {
  const houseTypes = schemes.constants.houseTypes;
  return Object.keys(houseTypes).map((x) => ({
    value: x,
    label: houseTypes[x],
  }));
}

const selectors = {
  items,
  cities,
  houseTypes,
};

function useMultiSelector(scheme, path) {
  const content = useSelector((x) => x.content);
  const options = selectors[scheme.selector]({ scheme, path, content });
  return { options };
}

export default useMultiSelector;
