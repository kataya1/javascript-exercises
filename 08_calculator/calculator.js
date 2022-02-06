const add = function(a ,b ) {
	return a + b
};

const subtract = function(a , b) {
	return a - b
};

const sum = function(arr) {
	let sum = 0
  arr.forEach( l => sum += l)
  return sum 
};

const multiply = function(arr) {
  let mul = 1
  arr.forEach( l => mul *= l)
  return mul 
};

const power = function(num, exponent) {
	return num ** exponent
};

const factorial = function(n) {
  if (n <= 1) return 1
	return n * factorial(n - 1)
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
