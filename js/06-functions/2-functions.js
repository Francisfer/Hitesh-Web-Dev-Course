/* 

4. Write a function named processedTeaOrder that takes another function, makeTea, as a parameter and calls it with the argument earl grey. Return the result of calling makeTea.

--> This exercise has the purpose of showing higher order functions.

--> So, we already know that the function parameters are just placeholders, we can name them as we want.

--> In this case, we've built the processedTeaOrder to receive a function as an argument, but we can write whatever we want in the want in the argument placeholder. In this case it was teaFunction.

--> It is when we call the processedTeaOrder that we write the NAME of the makeTea function, but we are not calling it.

--> That name will be received through the teaFunction argument/placeholder and, after that, we call the make tea function.

--> forEach() is an example of a higher order function. It takes a function as an argument.

 */

const makeTea = function (parameter) {
  return `makeTea: ${parameter}`;
};

const processedTeaOrder = function (teaFunction) {
  return teaFunction("earl grey");
};

let order = processedTeaOrder(makeTea);
console.log(order);

/* 

5. Write a function named createTeaMaker that returns another function. The returned function should take one parameter, teaType, and return a message like making green tea. Store the returned function in a variable named teaMaker and call it with green green tea.

This exercise talks about closures.
*/

const createTeaMaker = function () {
  return (teaType) => `Making ${teaType}`;
};

let teaMaker = createTeaMaker();
let tea = teaMaker("green tea");
