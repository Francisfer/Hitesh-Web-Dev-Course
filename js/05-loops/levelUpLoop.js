// 1. Write a for loop that loops through the array ["green tea", "black tea", "chai", "oolong tea"] and stops the loop when it finds "chai".

// Store all teas before "chai" in a new array named selectedTeas.

let teas = ["green tea", "black tea", "chai", "oolong tea"];

let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
  if (teas[i] === "chai") break;

  selectedTeas.push(teas[i]);
}

// console.log(selectedTeas);

// 2. Write a for loop that loops through the array ["London", "New York", "Paris", "Berlin"] and skips "Paris".

// Store the other cities in a new array named visitedCities.

let cities = ["London", "New York", "Paris", "Berlin"];

let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "Paris") continue;
  visitedCities.push(cities[i]);
}

// console.log(visitedCities);

// 3. Use a for loop to iterate through the array [1, 2, 3, 4, 5] and stop when the number 4 is found. Store the numbers before 4 in an array named smallNumbers.

let numbers = [1, 2, 3, 4, 5];

let smallNumbers = [];

for (const number of numbers) {
  if (number >= 4) break;
  smallNumbers.push(number);
}
// console.log(smallNumbers);

// 4. Use a for-of loop to iterate through the array ["chai", "green tea", "herbal tea", "black tea"] and skip "herbal tea". Store the other teas in an array named preferredTeas.

let teaOptions = ["chai", "green tea", "herbal tea", "black tea"];

let preferredTeas = [];

for (const tea of teaOptions) {
  if (tea === "herbal tea") continue;
  preferredTeas.push(tea);
}
// console.log(preferredTeas);

// 5. Use a for-in loop to loop through an object containing city populations. Stop the loop when the population of "Berlin" is found and store all previous cities and populations in a new object named cityPopulations.

let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};

let cityNewPopulations = {};

for (const key in citiesPopulation) {
  if (key === "Berlin") {
    break;
  }
  cityNewPopulations[key] = citiesPopulation[key];
}
// console.log(cityNewPopulations);

// 6. Use a for in loop to loop through an object containing city populations. Skip any city with a population below 3 million and store the rest in a new object named large cities.

let worldCities = {
  Sidney: 5000000,
  Paris: 2200000,
  Tokyo: 9000000,
  Berlin: 3500000,
};

let largeCities = {};

for (const city in worldCities) {
  if (worldCities[city] < 3000000) continue;

  largeCities[city] = worldCities[city];
}

// console.log(largeCities);

// 7. Write a forEach loop that iterates through the array ["earl grey", "green tea", "chai", "oolong tea"]. Stop when "chai" is found, and store all previous tea types in an array named availableTeas.

let allTeas = ["earl grey", "green tea", "chai", "oolong tea"];

let availableTeas = [];

allTeas.forEach((tea) => {
  if (tea === "chai") {
    return;
  }
  availableTeas.push(tea);
});
// console.log(availableTeas);

// 8. Write a forEach loop that iterates through the array ["Berlin", "Tokyo", "Sydney", "Paris"]. Skip "Sydney" and store the rest in traveledCities.

let places = ["Berlin", "Tokyo", "Sydney", "Paris"];

let traveledCities = [];

places.forEach((city) => {
  if (city === "Sydney") {
    return;
  }
  traveledCities.push(city);
});

// console.log(traveledCities);

// 9. Write a for loop that iterates through the array [2, 5, 7, 9]. Skip the value 7 and multiply the rest by 2. Store the results in a new array named doubledNumbers.

let nrs = [2, 5, 7, 9];
let doubledNumbers = [];

for (let i = 0; i < nrs.length; i++) {
  if (nrs[i] === 7) continue;
  doubledNumbers.push(nrs[i] * 2);
}
// console.log(doubledNumbers);

// 10. Use a for-of loop to iterate through the array ["chai", "green-tea", "black tea", "jasmine tea", "herbal tea"]. Stop when the length of the current tea name is greater than 10. Store the rest in shortTeas.

let all = ["chai", "green-tea", "black tea", "jasmine tea", "herbal tea"];

let shortTeas = [];

for (const tea of all) {
  if (tea.length > 10) {
    continue;
  }
  shortTeas.push(tea);
}
console.log(shortTeas);
