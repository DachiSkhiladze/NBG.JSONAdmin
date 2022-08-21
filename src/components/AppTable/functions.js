function count(params) {
  const { state, id } = params;

  return state[id].length;
}

function selector(params) {
  const { state, scheme, selector, id } = params;

  return scheme.constants[selector][state[id]];
}

function text(params) {
  var lang = localStorage.getItem("lang") || "Ge";
  return params.state[params.id][lang];
}

function price(params) {
  const value = params.state[params.id];
  let val = (value / 1).toFixed(2).replace(".", ",");
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "₾";
}

const functions = {
  count,
  selector,
  text,
  price,
};

export default functions;
