// 1. Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".

function stringToNumber(input) {
  let number = Number(input);

  if (Number.isNaN(number)) {
    return `Not a number`;
  } else {
    return number;
  }
}
// console.log(stringToNumber("1f9"));

// 2. Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.

function flipBoolean(input) {
  let boolean = Boolean(input);
  if (typeof boolean) {
    return !boolean;
  } else {
    return `Not possible.`;
  }
}

// console.log(flipBoolean(""));

// 3. Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"

function whatAmI(input) {
  let value = typeof input;

  return `I'm a ${value}!`;
}
// console.log(whatAmI(""));

// 4. Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.

function isItTruthy(input) {
  let boolean = Boolean(input);
  if (boolean) {
    return `It's truthy!`;
  } else {
    return `It's falsey!`;
  }
}
// console.log(isItTruthy(""));

/* ----------------------------------------------------------------------------------------- */

// 5. Perform the following mathematical operations on the provided variables a and b.

// **** DO NOT CHANGE the values *****
const a = 18;
const b = 24;

// Addition of two values
function add() {
  const result = a + b;
  return result;
}
console.log(add(a, b));

// Subtract small value from larger one
function subtract() {
  let result;
  if (a > b) {
    result = a - b;
  } else if (a < b) {
    result = b - a;
  }
  return result;
}
console.log(subtract());

// Multiply
function multiply(a, b) {
  let result = a * b;
  return result;
}

console.log(multiply(a, b));

// Divide larger value by small
function divide() {
  let result;
  if (a > b) {
    result = a / b;
  } else if (a < b) {
    result = b / a;
  }
  return result;
}
console.log(divide(a, b));

// Increase value of a by 1
function increment() {
  let result = a;
  return ++result;
}
console.log(increment(a));

// Decrease value of b by 1
function decrement() {
  let result = b;
  return --result;
}
console.log(decrement(b));

// Divide larger value by small to find the reminder
function reminder() {
  let result;
  if (a > b) {
    result = a % b;
  } else if (a < b) {
    result = b % a;
  }
  return result;
}
console.log(reminder(a, b));

/* ----------------------------------------------------------------------------------------- */
