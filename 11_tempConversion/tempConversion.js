const convertToCelsius = function(farenheitDeg) {
  let celsiusDeg = (farenheitDeg - 32) * 5/9;
  return Number(celsiusDeg.toFixed(1))
};

const convertToFahrenheit = function(celsiusDeg) {
  let farenheitDeg = celsiusDeg * 9/5 + 32;
  return Number(farenheitDeg.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
