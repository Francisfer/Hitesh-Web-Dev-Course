/* 

--> This lesson serves to learn how things work in the javascript functional way.


--> There is a special mechanism in javascript, in the functions to be more specific, which is called constructor function.


--> We use this constructor function to create the blueprint for other objects. This is commonly done with classes, but this is how javascript works without the syntactic sugar.

*/

// 1. We already know how functions are created, we've being doing this so far.

function greet(name) {
  console.log("Hello, " + name);
}

/* 

--> Turns how, the constructor function is exactly like this. The only difference is that we haven't actually stored the parameters into some variables.


--> Because there is no visible distinction between a regular function and a constructor function, there are some best practices/conventions to follow.


--> The first one is that the name of the function must always be in uppercase. Same thing with classes.


--> Another one, since there will be a lot of copies of this function, the parameters should not be used directly.

  --> This because we might need to do some more processing to this. In order to manipulate as we want and keep the parameters unchanged, we store them into variables.

  --> At this point, another rule or convention is to name the variables that we are creating with the exact same name of the parameter.

  --> We do not use let or const to define the variables, remember that we are creating placeholders for all the copies that might result from the constructor function.

  --> At this point, the "this" keyword comes into place. Remember that name and age are the parameters and this.name this.age are the variables/placeholders that we are creating.

 */

function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Car(make, model) {
  this.make = make;
  this.model = model;
}

/* 

2. Now that we've created the blueprint or the constructor function, this is how we create instances/objects from it.

--> This is where the new keyword comes into place.


--> As you can see in the code below, they are two different objects but Car is exactly the same.


--> If we try to create an instance without the use of the "new" keyword, when you log it, the result is undefined.

*/

let myCar = new Car("Opel", "Astra");
console.log(myCar); // Car { make: 'Opel', model: 'Astra' }

let myNewCar = new Car("Tesla", "Model S");
console.log(myNewCar); // Car { make: 'Tesla', model: 'Model S' }

/* 

--> What's happening behind the scenes is, when you try to create a car, you are trying to access the code block inside of the Car constructor function.

  --> To access the variables make and model, it is important to understand the context of the constructor function. What is variable, what is function, so, in other words, the context of it.

  --> The whole reason why everything is linked is, on one side the "this" keyword and, on the other the "new" keyword.

  --> These two keywords have an internal linking that makes it possible to access the internal variables/placeholders inside of the Car constructor.

  --> The most important is the new keyword, and the "this" keyword provides the context.

  --> The "this" keyword refers/points to the NEWLY CREATED OBJECT. That's why we need to use it in everything that we create in the constructor function.

  --> Like this, every object/instance will have it's own context.



--> We can write functions inside of the constructor function, called methods.

  --> This is where you can actually see the fundamental part of the this.keyword.

*/

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `This is a cup of ${this.type}!`;
  };
}

let lemonTea = new Tea("Lemon Tea");

console.log(lemonTea); // Tea { type: 'Lemon Tea', describe: [Function (anonymous)] }

console.log(lemonTea.describe()); // This is a cup of Lemon Tea!

//////////////////////// PROTOTYPES AND THE CONSTRUCTOR FUNCTION ////////////////////////

// Let's start by writing another constructor function.

function Animal(species) {
  this.species = species;
}

/* 

--> After defining this constructor function, later on in the code or on any file where we are importing this, we can actually take this constructor function and use .prototype to access the prototype and add any property or method to it.


--> REMEMBER - When we talked about prototypes we talked about objects, that is why we used:

  -> Object.setPrototypeOf(tesla, genericCar);

  -> Object.getPrototypeOf(tesla)

  -> Object.hasOwn(tesla, "tyres")

--> Because we where talking about objects, we can use them on the instances that we've created, but not on the constructor function.

--> To access the prototype of the constructor function we use .prototype.

*/

Animal.prototype.sound = function (sound) {
  return `${this.species} makes a sound = ${sound}.`;
};

let dog = new Animal("dog");
console.log(dog.sound("au"));

// --> Notice that we can make evaluations inside of a constructor function, like if there is no new keyword on the target throw a new error. Before the result was just undefined.

function Drink(name) {
  if (!new.target) {
    throw new Error("Drink must be called with new keyword.");
  }
  this.name = name;
}

let tea = new Drink("Tea");
let coffee = Drink("Coffee");
console.log(coffee); // Error: Drink must be called with new keyword.
