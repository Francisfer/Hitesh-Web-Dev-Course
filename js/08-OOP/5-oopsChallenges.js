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

// Task 1: Create a Functional Constructor.

// Create a functional constructor Person that takes name and age as parameters. Add a method greet() to the constructor that returns "Hello, my name is [name]".

// Task 2: Handle Errors

//Modify the Person constructor to throw an error if the age is not a positive number.

// function Person(name, age) {
//   if (typeof age !== "number" || age <= 0) {
//     throw new Error("Age must be a positive number");
//   }
//   this.name = name;
//   this.age = age;

//   this.greet = function () {
//     return `Hello, my name is ${this.name}`;
//   };
// }

// let me = new Person("Francisco", 0);
// console.log(me);

/* --------------- 38 - Classes, objects and inheritance ---------------*/

// Task 1: Class Inheritance

// Create a class Vehicle with properties make and model, and a method getDetails() that returns a string "Make: [make], Model: [model]".

// Create a subclass Car that extends Vehicle and adds a method startEngine() that returns "Engine started".

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  static isVehicle(obj) {
    return obj instanceof Vehicle;
  }
  getDetails() {
    return `Make: ${this.make}, Model: ${this.model}`;
  }
}

class Car extends Vehicle {
  startEngine() {
    return `Engine started`;
  }
}
// Task 2: Method Overriding in Inheritance

// Extend the Vehicle class from the previous task to include a method move() that returns "The vehicle is moving".

// Then, override the move() method in the Car class to return "The car is driving".
Vehicle.prototype.move = function () {
  return `The vehicle is moving`;
};

Car.prototype.move = function () {
  return `The car is driving`;
};

let car = new Car();

let vehicle = new Vehicle();
// console.log(Vehicle.isVehicle(car));
// Task 3: Static Methods in Classes

// Add a static method isVehicle(obj) to the Vehicle class that checks if a given object is an instance of Vehicle. The method should return true if the object is a Vehicle or a subclass of Vehicle, and false otherwise.

/* --------------- 39 - Encapsulation, polymorphism, abstraction and getters/setters ---------------*/

// Task 1: Encapsulation Using Getters and Setters

// Create a class BankAccount with a private property _balance.

// Add methods deposit(amount) and withdraw(amount).

// Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.

class BankAccount {
  constructor(balance = 0) {
    if (balance < 0) {
      throw new Error("Initial balance cannot be negative");
    }
    this._balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this._balance += amount;
    } else {
      throw new Error("Deposit amount must be positive");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
    } else {
      throw new Error("Insufficient funds");
    }
  }

  get balance() {
    return this._balance;
  }

  set balance(amount) {
    throw new Error("Balance cannot be negative");
  }
}

// Task 2: Polymorphism with Method Overriding

// Create a class Shape with a method area() that returns 0.

// Create two subclasses Circle and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively.

class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    let area = Math.PI * this.radius ** 2;
    return area;
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }
  area() {
    let area = this.length * this.width;
    return area;
  }
}

let circle = new Circle(3);
// console.log(circle.area());
let rectangle = new Rectangle(4, 4);
