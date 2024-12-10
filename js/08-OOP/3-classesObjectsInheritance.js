/* 

--> The whole idea behind OOP is the ability to create objects.


--> We already saw how to do it with the construction function.


--> The Object Oriented Paradigm is the paradigm of writing the code where the concept of objects comes into the big picture.


--> We want to create objects that are instances of the classes.


--> In the world of OOP, a lot of focus is dedicated to a couple of keywords:

  -> Encapsulation.

  -> Inheritance.

  -> Polymorphism.

  -> Abstraction.

*/

/* ---------------------------------- A ----------------------------------- */

// Turns out, everything in the world of javascript is an object. Under the hood, even the classes are objects. So let's star by writing an object literal.

// Even though this is an object literal, to access the properties of it, in a function as the example, we need to use the "this" keyword.

let car = {
  make: "Opel",
  model: "Astra",
  year: 2009,
  start: function () {
    return `${this.make} ${this.model} dates to the year ${this.year}`;
  },
};

// console.log(car.start()); // Opel Astra dates to the year 2009

/* ---------------------------------- B ----------------------------------- */

// The problem with this is that we cannot create many instances/copies of it. We solved that problem by learning about the constructor function.

function Car(make, model, year) {
  (this.make = make),
    (this.model = model),
    (this.year = year),
    (this.start = function () {
      return `${this.make} ${this.model} dates to the year ${this.year}`;
    });
}

let myCar = new Car("Opel", "Astra", 2009);
// console.log(myCar);

// After this we saw how we can add methods or properties by using the prototypal chain. Remember that only the instances created after this change get affected by it.

// This is the same as setting a new method on the Array object.

// Array.prototype.francisco = function () { return `Custom method ${this}` }

// If we now grab an array and call the francisco method on it, we will see the log, but most importantly the array getting printed. Because this point to the object on which the method is called.

Car.prototype.wheels = 4;
Car.prototype.speed = function (speed) {
  return `${this.make} ${this.model} goes up to ${speed}`;
};

let neighborCar = new Car("Renault", "Megane", "1944");

// console.log(neighborCar); // Car {make: 'Renault', model: 'Megane', year: '1944', start: [Function (anonymous)]}

// console.log(neighborCar.wheels); // 4

// console.log(neighborCar.speed(200)); // Renault Megane goes up to 200

/* ---------------------------------- C ----------------------------------- */

/* 
--> Now let's see how the classes are being created in javascript and what exactly is the syntactic sugar. Remember that they are also prototypes.


--> We are also going to see inheritance.


--> After the class keyword and the name of the class, remember that, with constructor functions, we had arguments. function Animal (a, b) {};


--> This time, we need to put the function inside the class, calling it a method just for that.


--> This method is called constructor and it is there where we put the parameters, where the order does not matter.


--> Since this is a class, we can define variables in it, but most of the times we are going to define methods in it.

 */

// class Vehicle {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }

//   start() {
//     return `${this.model} is a car from ${this.make}`;
//   }
// }

/* 

--> After this, we can create as many instances/objects from the class as we want.


--> But first, let's address the topic of inheritance.


--> Most of the times, we use inheritance to borrow the functionality built in a class into another.

  -> For this, we use the keyword extends.


--> As for the constructor method, putting the constructor or not is an optional thing.

  -> We usually need the constructor in an extended Class in 4 scenarios:

*/

// 1. If the subclass needs properties or setup in addition to what the parent class provides, you must define a constructor to handle that.

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent constructor
    this.breed = breed; // Add an extra property
  }
}

const myDog = new Dog("Buddy", "Golden Retriever");
// console.log(myDog); // Dog { name: 'Buddy', breed: 'Golden Retriever' }

// 2. If the parent class has a constructor that requires arguments, the subclass must use super() to pass those arguments. Without super(), the subclass cannot access this and will throw an error.

class Animal1 {
  constructor(name) {
    this.name = name;
  }
}

class Bird extends Animal1 {
  constructor(name, canFly) {
    super(name); // Pass 'name' to the parent class
    this.canFly = canFly;
  }
}

const parrot = new Bird("Polly", true);
// console.log(parrot); // Bird { name: 'Polly', canFly: true }

// 3. To Override Parent Constructor Behavior. If you want to customize or entirely override the behavior of the parent class's constructor, you need to define a constructor in the subclass.

class Animal2 {
  constructor(name) {
    this.name = name;
  }
}

class Fish extends Animal2 {
  constructor() {
    super("Fish"); // Default name for all Fish instances
    this.environment = "Water";
  }
}

const goldfish = new Fish();
// console.log(goldfish); // Fish { name: 'Fish', environment: 'Water' }

// 4. If you need to include extra logic during the construction process, such as validations or modifications of parameters, you'll need a constructor.

class Animal3 {
  constructor(name) {
    this.name = name;
  }
}

class Cat extends Animal3 {
  constructor(name) {
    if (!name) {
      throw new Error("Name is required for a Cat");
    }
    super(name);
    this.type = "Cat";
  }
}

const kitty = new Cat("Whiskers");
// console.log(kitty); // Cat { name: 'Whiskers', type: 'Cat' }

///////////////// KEY POINTS ABOUT SUPER /////////////////

/* 

--> Always Use super() in Subclass Constructors:

1. You must call super() before accessing this in the subclass constructor.

2. If you don’t call super() in a subclass, JavaScript will throw a ReferenceError.

3. Pass Arguments to super(): The arguments you pass to super() are sent to the parent class's constructor.

*/

class Parent {
  constructor(value) {
    this.value = value;
  }
}

class Child extends Parent {
  constructor(value) {
    // this.value = value; // Error: Must call super constructor first
    super(value);
  }
}

/* -------------------------------------------------------------------------------------- */

// Going back to where we were, let's extend the functionality of our first class into another.

// We are just adding a method.

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

class Car2 extends Vehicle {
  drive() {
    return `${this.make} : This is an inheritance example!`;
  }
}

// As for creating objects/instances out of the classes, the syntax is exactly the same.

let anotherCar = new Car2("Audi", "A3");
console.log(anotherCar.start()); // A3 is a car from Audi

console.log(anotherCar.drive()); // Audi : This is an inheritance example!
