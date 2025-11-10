const add = function(num1, num2) {
	num1 = +num1;
  num2 = +num2;
  return num1 + num2;
};

const subtract = function(first, second) {
	return first - second;
};

const sum = function(arg) {
	return arg.reduce((sum, current) => sum + Number(current), 0);
};

const multiply = function(arg) {
  return arg.reduce((res, current) => res * Number(current), 1);
};

const power = function(base, exponent) {
	let res = 1;
  for (let i = 0; i < exponent; i++){
    res *= base;
  }
  return res;
};

const factorial = function(num) {
	if (num == 0 || num == 1){
    return 1;
  }
  else {
    return num * factorial(num-1);
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
