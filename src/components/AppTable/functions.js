function count(params) {
  const { state, id } = params;

  return state[id]?.length || 0;
}

function selector(params) {
  const { state, scheme, selector, id } = params;

  return scheme.constants[selector][state[id]];
}

function multi_selector(params) {
  const { state, scheme, selector, id } = params;

  return state[id].map((x) => scheme.constants[selector][x]).join(", ");
}

function text(params) {
  var lang = localStorage.getItem("lang") || "Ge";
  return params.state[params.id]?.[lang];
}

function bool(params) {
  const { state, id } = params;
  const value = state[id];
  return value == "1" || value == true ? "კი" : "არა";
}

function item(params) {
  const { state, id, content } = params;
  const value = state[id];
  var lang = localStorage.getItem("lang") || "Ge";

  return content.Items.find((x) => x.Id === value).Name[lang];
}

function price(params) {
  const value = params.state[params.id];

  let val = (value / 1).toFixed(2).replace(".", ",");
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "₾";
}

function percent(params) {
  const value = params.state[params.id];
  return value + "%";
}

const functions = {
  count,
  selector,
  text,
  price,
  bool,
  multi_selector,
  item,
  percent,
};

export default functions;
