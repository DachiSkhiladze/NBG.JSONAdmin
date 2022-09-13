import schemes from "../../../scheme.json";
import { useSelector } from "react-redux";

function items({ content }) {
  var lang = localStorage.getItem("lang") || "Ge";

  return content.Items.map((x) => ({
    value: x.Id,
    label: x.Name[lang],
  }));
}

function furnitures({ content }) {
  var lang = localStorage.getItem("lang") || "Ge";

  var ids = content.Parameters.HouseTemplates.map((x) => x.ItemId);
  return content.Items.filter((x) => ids.includes(x.Id)).map((x) => ({
    value: x.Id,
    label: x.Name[lang],
  }));
}

function actions() {
  const actions = schemes.constants.actions;
  return Object.keys(actions).map((x) => ({ value: x, label: actions[x] }));
}

function depositTypes() {
  const depositTypes = schemes.constants.depositTypes;
  return Object.keys(depositTypes).map((x) => ({
    value: x,
    label: depositTypes[x],
  }));
}

function cities() {
  const cities = schemes.constants.cities;
  return Object.keys(cities).map((x) => ({ value: x, label: cities[x] }));
}

function itemDescriptions() {
  const itemDescriptions = schemes.constants.itemDescriptions;
  return Object.keys(itemDescriptions).map((x) => ({
    value: x,
    label: itemDescriptions[x],
  }));
}
function parameters() {
  const parameters = schemes.constants.parameters;
  return Object.keys(parameters).map((x) => ({
    value: x,
    label: parameters[x],
  }));
}
function insurances() {
  const insurances = schemes.constants.insurances;
  return Object.keys(insurances).map((x) => ({
    value: x,
    label: insurances[x],
  }));
}

function debt() {
  const debt = schemes.constants.debt;
  return Object.keys(debt).map((x) => ({ value: x, label: debt[x] }));
}

function missionTypes() {
  const types = schemes.constants.missionTypes;
  return Object.keys(types).map((x) => ({ value: x, label: types[x] }));
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
  missionTypes,
  bool,
  actions,
  debt,
  depositTypes,
  parameters,
  insurances,
  itemDescriptions,
  furnitures,
};

function useMultiSelector(scheme, path) {
  const content = useSelector((x) => x.content);
  const lang = useSelector((x) => x.language);
  const options = selectors[scheme.selector]({ scheme, path, content });
  return { options };
}

export default useMultiSelector;
