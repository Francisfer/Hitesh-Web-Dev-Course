// 1. Check if a number is greater than another.

let num1 = 5;
let num2 = 8;

if (num1 > num2) {
  console.log("Yes, num1 is greater than num2");
} else {
  console.log("No, num1 is NOT greater than num2");
}

// Checking if a string is equal to another string.

let userName = "Francis";
let anotherUser = "Francis";

if (userName == anotherUser) {
  console.log("Pick another username");
} else {
  console.log("Username available");
}

// 2. Check if a variable is a number or not.

let score = "44";

if (typeof score == "number") {
  console.log("Score is a number");
} else {
  console.log("Score is not a number");
}

// 3. Check if a boolean value is true of false.

/*

--> Since the value of the check/condition must boil down to a boolean, we don't need to be more specific in it.

--> Because the value is already a boolean.

*/
let isLoggedIn = false;

if (isLoggedIn) {
  console.log("User is logged in.");
} else {
  console.log("User is not logged in.");
}

// 4. Check if an array is empty or not.

/*
  We can check it like this because .length is not zero based. It has nothing to do with index position, it gives us the number of values that are inside the array.
*/

const arr = [2];

if (arr.length === 0) {
  console.log("The array is empty");
} else {
  console.log("The array is not empty");
}
