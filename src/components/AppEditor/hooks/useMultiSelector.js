import schemes from "../../../scheme.json";
import { useSelector } from "react-redux";

function items({ content }) {
  var lang = localStorage.getItem("lang") || "Ge";

  return content.Items.map((x) => ({
    value: x.Id,
    label: x.Name[lang],
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

function difficulty() {
  const options = [
    {
      label: "საშუალო",
      value: 0,
    },
    {
      label: "მარტივი",
      value: 1,
    },
    {
      label: "რთული",
      value: 2,
    },
  ];
  return options;
}

function bool() {
  const options = [
    {
      label: "კი",
      value: true,
    },
    {
      label: "არა",
      value: false,
    },
  ];
  return options;
}

const selectors = {
  items,
  cities,
  houseTypes,
  difficulty,
  bool,
};

function useMultiSelector(scheme, path) {
  const content = useSelector((x) => x.content);
  const lang = useSelector((x) => x.language);
  const options = selectors[scheme.selector]({ scheme, path, content });
  return { options };
}

export default useMultiSelector;
