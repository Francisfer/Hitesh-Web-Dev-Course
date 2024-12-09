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
console.log(whatAmI(""));

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
