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
// console.log(add(a, b));

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
// console.log(subtract(a, b));

// Multiply
function multiply(a, b) {
  let result = a * b;
  return result;
}

// console.log(multiply(a, b));

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
// console.log(divide(a, b));

// Increase value of a by 1
function increment() {
  let result = a;
  return ++result;
}
// console.log(increment(a));

// Decrease value of b by 1
function decrement() {
  let result = b;
  return --result;
}
// console.log(decrement(b));

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
// console.log(reminder(a, b));

/* ----------------------------------------------------------------------------------------- */

/* 
--> Arrays and Methods

--> Utilize the inbuilt methods of arrays in Javascript to solve the below tasks:

*/

// 1. Array Filtering - Write a function filterNumbers(arr) that returns only numbers from a mixed array

// function filterNumbers(arr) {
//   return arr.filter((i) => typeof i === "number");
// }

///////////////////////////////////////////////////////////////

// function filterNumbers(arr) {
//   let onlyNumbers = [];

//   arr.forEach((element) => {
//     if (typeof element === "number") {
//       onlyNumbers.push(element);
//     }
//   });
//   return onlyNumbers;
// }

///////////////////////////////////////////////////////////////

// function filterNumbers(arr) {
//   let onlyNumbers = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//       onlyNumbers.push(arr[i]);
//     }
//   }
//   return onlyNumbers;
// }

///////////////////////////////////////////////////////////////

// function filterNumbers(arr) {
//   let onlyNumbers = [];
//   for (const element of arr) {
//     if (typeof element === "number") {
//       onlyNumbers.push(element);
//     }
//   }
//   return onlyNumbers;
// }

// 2. Array Reversal - Write a function reverseArray(arr) that reverses the array

// function reverseArray(arr) {
//   return arr.reverse();
// }

///////////////////////////////////////////////////////////////

// function reverseArray(arr) {
//   let reversed = [];
//   for (const element of arr) {
//     reversed.unshift(element);
//   }
//   return reversed;
// }

///////////////////////////////////////////////////////////////

// function reverseArray(arr) {
//   let reversed = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i]);
//   }
//   return reversed;
// }

// 3. Find Maximum in an Array - Write a function findMax(arr) that returns the largest number in the array.

// function findMax(arr) {
//   return arr.reduce((acc, curr) => {
//     if (acc < curr) {
//       acc = curr;
//     }
//     return acc;
//   });
// }

///////////////////////////////////////////////////////////////

// let arr = [2, -2, 0, 4, 6, 9];
// function findMax(arr) {
//   let maxValue = [];
//   for (const element of arr) {
//     if (typeof element === "number" && maxValue < element) {
//       maxValue = element;
//     }
//   }
//   return maxValue;
// }
// console.log(findMax(arr));

///////////////////////////////////////////////////////////////

function findMax(arr) {
  let max = Math.max(...arr);
  return max;
}

// 4. Remove Duplicates from an Array - Write a function removeDuplicates(arr) that returns a new array with all duplicates removed.

function removeDuplicates(arr) {
  return arr.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
}

///////////////////////////////////////////////////////////////

// Flatten a Nested Array - Write a function flattenArray(arr) that takes a nested array and returns a single flattened array.

function flattenArray(arr) {
  return arr.flat();
}
