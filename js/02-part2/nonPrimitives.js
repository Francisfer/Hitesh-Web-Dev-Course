// Objects

let userName = {
  firstName: "Francis",
  isLoggedIn: true,
};

// console.log(typeof userName);
// console.log(userName);

// Even if we define an object with const, the variables within can be changed. We can also add new key value pairs.

const userName1 = {
  firstName: "John",
  isLoggedIn: true,
  "middle name": "Vicente",
};

userName1.firstName = "Jay";
userName1.isLoggedIn = false;
userName1.lastName = "Ferreira";

// console.log(userName1);
// console.log(userName1["middle name"]);

// Arrays - Collections

let heroes = ["a", "b", "c", true];

console.log(heroes[0]);
