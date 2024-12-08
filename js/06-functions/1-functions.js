// As a programmer, most of the time is spent writing functions.

// Most of the time, functions are not called immediately, they are executed upon certain events like requests, clicks, etc.

// The function itself have parameters, we call the functions with an argument.

// Once we call a function, we are saying that it needs to execute.

// After being called, the function gets loaded into memory and creates an execution context (a box where runs the code).

// Inside of the first function, there is another function that is called by the first one, so, another execution context is created.

// After the string is returned, that function gets out of memory because it finished its execution.

// At the end, since the result of the second function is available, it gets returned by the first function. Which also terminates its execution context and gets out of memory.

//

/* 

1. Write a function named makeTea that takes one parameter, typeOfTea, and returns a string like "Making green tea" when called with green tea. Store the result is a variable named teaOrder.

*/

const makeTea = function (typeOfTea) {
  return `Making ${typeOfTea}!`;
};

let teaOrder = makeTea("Chai Tea");
// console.log(teaOrder);

/* 

2. Create a function named orderTea that takes one parameter, teaType. Inside this function, create another function named confirmOrder that returns a message like "Order confirmed for chai". Call confirmOrder from within orderTea and return the result.

--> This exercise was to explain the execution context in javascript.

  --> Once we call a function, in this case orderTea, we are saying that it needs to execute.

--> After being called, the function gets loaded into memory and creates an execution context (a box where runs the code).

--> Inside of this first function, there is another function call that needs to be returned, so, another execution context is created.

  --> At this point, the execution context of the confirmOrder, so, the second function, is inside of the scope of the first one.

--> After the string is returned, that function gets out of memory and closes its execution context because it finished its execution.

--> And, at the end, since the result of the second function is available, it gets returned by the first function. Which also terminates its execution context and gets out of memory.
*/

function orderTea(teaType) {
  confirmOrder = () => `Order confirmed for Chai. He wants ${teaType}!`;
  return confirmOrder();
}

let chaiOrder = orderTea("Green Tea");
// console.log(chaiOrder);

/* 

3. Write an arrow function named calculateTotal that takes two parameters: price and quantity. 

The function should return the total cost by multiplying the price and the quantity.

Store the result in a variable named totalCost.


--> This exercise has the purpose of showing the arrow functions and introduce the differences that the this keyword has in a regular function and an arrow function.

--> The this keyword is very important for setting the context, sometimes it is referred as the this context.

--> It's not like the arrow function does not have a context, this subject is taught on the browser, so the this keyword produces the same window object in both type of functions.

  --> However, it does not have the ability of passing on the this context.

--> However, in the node context, the result is different. The this keyword is an empty object in the arrow function, but on the regular function it is a global object.

*/

const calculateTotal = (price, quantity) => {
  price * quantity;
};

let totalCost = calculateTotal(10, 5);
// console.log(totalCost);

const checkThisArrow = () => console.log(this);

const checkThisRegular = function () {
  console.log(this);
};

// checkThisArrow();
// checkThisRegular();
