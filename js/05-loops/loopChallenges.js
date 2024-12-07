// 1. Write a while loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named sum.

// We only start with zero because we are adding to it, if we were multiplying, every iteration would result in zero.

/* let sum = 0;
let i = 1;

while (i <= 5) {
  sum += i;
  i++;
}
console.log(sum);
 */

// 2. Write a while loop that counts down from 5 to 1 and stores the numbers in an array named countdown.

/* let countdown = [];

let i = 5;

while (i >= 1) {
  countdown.push(i);
  i--;
}

console.log(countdown);
 */

// 3. Write a do while loop that prompts a user to enter their favorite tea type until they enter "stop". Store each tea type in an array named teaCollection.

/* let teaCollection = [];

let tea;

do {
  tea = prompt("What is your favorite type of tea? (type 'stop' to finish)");

  if (tea !== "stop") {
    teaCollection.push(tea);
  }
} while (tea !== "stop");
 */

// 4. Write a do while loop that adds numbers from 1 to 3 and stores the result in a variable named total.

/* let total = 0;

let i = 1;

while (i <= 3) {
  total += i;
  i++;
}

// do {
//   total += i;
//   i++;
// } while (i <= 3);

console.log(total); */

// 5. Write a for loop that multiplies each element in the array [2, 4, 6] by 2 and stores the results in a new array named multiplied numbers.

let arr = [2, 4, 6];

let multipliedNumbers = [];

for (let i = 0; i < arr.length; i++) {
  multipliedNumbers.push(arr[i] * 2);
}

console.log(multipliedNumbers);

// 6. Write a for loop that lists all the cities in the array ["Paris", "New York", "Tokio", "London"] and stores each city in a new array named cityList.

let cities = ["Paris", "New York", "Tokio", "London"];
let cityList = [];

for (let i = 0; i < cities.length; i++) {
  cityList.push(cities[i]);
}

console.log(cityList);
