const convertToCelsius = function(temp) {
  rounded = (temp - 32) * 5/9;
  rounded = Math.round(rounded * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(temp) {
  rounded = (temp * 9/5) + 32;
  rounded = Math.round(rounded * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
