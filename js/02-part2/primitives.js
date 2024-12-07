// NUMBER

// Type of - To know the type of data

let balance = 129;

console.log(typeof balance);

// The new keyword, used for classes, generates an array, when generating a new number for ex.

let newBalance = new Number(100);

console.log(newBalance);

console.log(newBalance.valueOf());

console.log(typeof newBalance);

// This also works with booleans.

let isActive = true;
let isReallyActive = new Boolean(true);

// STRING

let myString = "Hola";
let userName = "Francis";
let anotherString = "Bilbo";

// Old way

let oldGreet = myString + " " + "Jonas";
console.log(oldGreet);

// New way - String concatenation.

let newGreet = `Hello ${userName}`;
console.log(newGreet);

// String concatenation allows computations.

let something = `The value is ${2 + 2}`;

// SYMBOL

let symbol1 = Symbol();
let symbol2 = Symbol();

// Although the appear to have the same value, if we test it, we see that their are not equal.

console.log(symbol1 == symbol2); // False

// This happens although they have the same value.

console.log(symbol1, symbol2); // Symbol() Symbol()
