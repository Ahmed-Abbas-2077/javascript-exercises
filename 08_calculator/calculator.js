const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
	summation = 0;
  for (let i = 0; i < arr.length; i++) {
    summation += arr[i];
  }
  return summation;
};

const multiply = function(arr) {
  product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
  if (a == 0) {
    return 1;
  } else {
    return a * factorial(a - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
