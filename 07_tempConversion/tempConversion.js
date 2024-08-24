const convertToCelsius = function(temp) {
  result = (temp - 32) / 1.8;
  
  if (Number.isInteger(result)) {
    return result;
  } else {
    return parseFloat(result.toFixed(1))
  }
};

const convertToFahrenheit = function(temp) {
  result = temp * 1.8 + 32

  if (Number.isInteger(result)) {
    return result;
  } else {
    return parseFloat(result.toFixed(1))
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
