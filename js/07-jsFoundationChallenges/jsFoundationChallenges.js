///////////////////////// EXERCISE 30 - PLAYING WITH TYPES /////////////////////////

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

///////////////////////// EXERCISE 31 - PLAYING WITH VARIABLES /////////////////////////

// 1. Perform the following mathematical operations on the provided variables a and b.

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

///////////////////////// EXERCISE 32 - ARRAYS AND METHODS /////////////////////////

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

// function removeDuplicates(arr) {
//   return arr.reduce((acc, curr) => {
//     if (!acc.includes(curr)) {
//       acc.push(curr);
//     }
//     return acc;
//   }, []);
// }
///////////////////////////////////////////////////////////////
// function removeDuplicates(arr) {
//   let unique = [];
//   arr.forEach((element) => {
//     if (!unique.includes(element)) {
//       unique.push(element);
//     }
//   });

//   return unique;
// }
///////////////////////////////////////////////////////////////
// let arr = [2, -2, 0, 4, 6, 9, 2, -2, 0, 4];
function removeDuplicates(arr) {
  let unique = [...new Set(arr)];
  console.log(unique);
  return unique;
}
// removeDuplicates(arr);
///////////////////////////////////////////////////////////////

// 5. Flatten a Nested Array - Write a function flattenArray(arr) that takes a nested array and returns a single flattened array.

function flattenArray(arr) {
  return arr.flat();
}

///////////////////////// EXERCISE 33 - LOOPS /////////////////////////

/* 

--> Loops

*/

// 1. Sum of First N Natural Numbers - Write a function sumOfN(n) that returns the sum of the first n natural numbers.

function sumOfN(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}
// console.log(sumOfN(7));

// 2. Multiplication Table - Write a function printMultiplicationTable(n) that returns the multiplication table for n. Values return in the array must be of the format 2 * 2 = 4.

function printMultiplicationTable(n) {
  let table = [];

  for (let i = 1; i < 11; i++) {
    table.push(`${n} * ${i} = ${n * i}`);
  }

  return table;
}
// console.log(printMultiplicationTable(2));

// 3. Count Vowels in a String - Write a function countVowels(str) that returns the number of vowels (in both lower & uppercase) in the given string str.

let str = "a, A, b, c, d ,E , e, i, I";

function countVowels(str) {
  let vowels = "aAeEiIoOuU";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (vowels.includes(element)) {
      count++;
    }
  }
  return count;
}

// console.log(countVowels(str));

///////////////////////// EXERCISE 34 - HIGHER ORDER FUNCTIONS AND ARROW /////////////////////////
