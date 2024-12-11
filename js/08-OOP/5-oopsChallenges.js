/* --------------- 36 - Prototypes in javascript ---------------*/

// 1. Prototype Chaining

// Create a constructor function Animal that has a method speak() that return 'Animal speaking'.
// Then create another constructor Dog that inherits from Animal using prototypes.
// The Dog constructor should add a method bark() that returns 'Woof!'. Demonstrate the prototype chain between Dog and Animal.

function Animal() {}
Animal.prototype.speak = function () {
  return `Animal speaking`;
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
  return `Woof!`;
};

let dog = new Dog();
// console.log(dog.speak());

/* --------------- 37 - Functional constructor and errors ---------------*/
/* --------------- 38 - Classes, objects and inheritance ---------------*/
/* --------------- 39 - Encapsulation, polymorphism, abstraction and getters/setters ---------------*/
