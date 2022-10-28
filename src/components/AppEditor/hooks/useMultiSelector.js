import schemes from "../../../scheme.json";
import buildings from "../../../assets/buildings.json";
import { useSelector } from "react-redux";

function items({ content }) {
  var lang = localStorage.getItem("lang") || "Ge";

  return content.Items.map((x) => ({
    value: x.Id,
    label: x.Name[lang],
  }));
}

function furnitures({ scheme, path, content, state }) {
  var lang = localStorage.getItem("lang") || "Ge";

  var ids = content.Parameters.HouseTemplates.filter((x) =>
    x.HouseTypes.includes(state.Type?.toString())
  ).map((x) => x.ItemId);

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

function jobs({ content, state }) {
  console.log(state.City);
  var lang = localStorage.getItem("lang") || "Ge";

  console.log(content.Jobs.filter((x) => x.City == state.City));
  return content.Jobs.filter((x) => x.City == state.City).map((x) => ({
    value: x.Id,
    label: x.Name?.[lang],
  }));
}

function jobRanks({ content, state }) {
  var lang = localStorage.getItem("lang") || "Ge";

  var data = content.Jobs.filter((x) => x.City == state.City).reduce(
    (a, c) => [
      ...c.Ranks.map((x) => ({
        City: c.City,
        value: c.Id + '_' +  x.RequiredQualification,
        label: c.Name?.[lang] + " - " + x.Name?.[lang],
      })),
      ...a,
    ],
    []
  );

  console.log(data, "asdasd");

  return data;
}

function businesses({ content, state }) {
  var lang = localStorage.getItem("lang") || "Ge";

  return content.Businesses.filter((x) => x.City == state.City).map((x) => ({
    value: x.Id,
    label: x.Title?.[lang],
  }));
}

function activities({ content, state }) {
  var lang = localStorage.getItem("lang") || "Ge";

  return content.Activities.filter((x) => x.City == state.City).map((x) => ({
    value: x.Id,
    label: x.Title?.[lang],
  }));
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
      label: "მარტივი",
      value: 0,
    },
    {
      label: "საშუალო",
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
      value: 1,
    },
    {
      label: "არა",
      value: 0,
    },
  ];
  return options;
}

function building({ state }) {
  if (state.City !== undefined) {
    return buildings.buildings.filter((x) => x.cityId == state.City);
  }
  return buildings.buildings;
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
  building,
  parameters,
  insurances,
  itemDescriptions,
  furnitures,
  jobs,
  jobRanks,
  businesses,
  activities,
};

function useMultiSelector(scheme, path, state) {
  const content = useSelector((x) => x.content);
  const lang = useSelector((x) => x.language);
  const options = selectors[scheme.selector]({ scheme, path, content, state });
  return { options };
}

export default useMultiSelector;
