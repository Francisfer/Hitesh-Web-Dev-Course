/* 

--> Paradigm so programming. A paradigm is a programming style, a methodology to solve problems using a certain style of code.


--> Every programming language offers a way of writing code.


--> We have oop, procedural programming, prototype programming.


--> Eventually, the style of writing code brings new features in the programming language.


--> That is what happened with javascript. Till this day, javascript is a prototype based programming language under the hood.


--> In order to offer the OOP like it was being used in other programming languages, they added syntactic sugar that gives us access to keywords like class, new, constructor. 


--> But what does it mean to have a OOP language?

  -> For better understand this paradigm, start by imagining a form. This form takes the usual inputs like firstName, lastName, email, etc.

  -> If we can group all of this data that is being collected by the form, we can make as many copies of the group as we want.

  -> The original form, the blueprint for all the others is known as class. All the copies that we create from the class are called instances of the class or objects of the class.


--> For this, we can understand OOP as class based programming or object based programming. Class-Object based.


--> First we are going through prototype based programming and only after we move to the OOP base. 


--> To actually see that javascript still is a prototype based programming language, we can go to the browser.


--> On the console, if we declare an array variable or a function or whatever and then try to run it or print it we can see the prototypes.


--> Prototypes mean extra properties and extra functionality in any given data type. If we open the first level of the prototype we can see all the methods for arrays (if we created an array).


--> If we open the prototype object, we can see the constructor, is prototype of, etc.


--> This prototype object is what we are going to study now.


--> Now that we know what a prototype is, how do we create one?

*/

let computer = {
  cpu: 12,
};

let lenovo = {
  screen: "HD",
};

let tomHardware = {};

// If we log one of them to the console, we already know what is going to show up.

console.log(computer); // { cpu: 12 }

// But if we use "dunder", which is nothing but a double underscore, we can access the prototype.

console.log(lenovo.__proto__); // [Object: null prototype] {}

// On node, that is all we can see, but if we go to the browser and write the same code we can access much more information.

// The reason why we see an empty object is because nobody is overwriting it, so all the default properties are there, but node does not show them because it is supposed that you know that they are there.

//////////////////////////// But what is the use of this? ////////////////////////////

// Let's stay with the examples of the computers. Say that lenovo is building a new computer with a feature of its own, the screen. But it needs all the functionality of the computer.

// Instead of copying and pasting everything we can just access to its prototype. Like this, we have access to all the properties of computer:

let lenovo1 = {
  screen: "HD",
  __proto__: computer,
};

// Now, if we log lenovo1, we do not see [Object: null prototype]. We see the screen because we manually injected this custom property.

console.log(lenovo1); // { screen: 'HD' }

// --> There are other ways that we can access the prototype of another object, this is the most old legacy way that we're gonna see.

//////////////////////////// Another way ////////////////////////////

let genericCar = {
  tyres: 4,
};

let tesla = {
  driver: "AI",
};

// Another way of accessing all the properties of an object is to use setPrototype. This reads as: in tesla, i want to access all properties that are in generic car.

Object.setPrototypeOf(tesla, genericCar);

console.log(tesla); // { driver: 'AI' }

// As we may conclude, logging the object does not show the properties that we want from genericCar, however, if we try to access them, they are there.

console.log(tesla.tyres); // 4

// If we use setPrototypeOf() to access the properties of another object , when trying to access any property, the best practice is to use:

console.log(Object.getPrototypeOf(tesla)); // { tyres: 4 }

// Tesla will always have access to its properties, but if we injected the properties of another object by using Object.setPrototypeOf, them use Object.getPrototypeOf(tesla) to access them.

// Also, like this, we have access to other methods like hasOwnProperty(), which tells us if a property is actually "native" to the object of if it is inherited. It returns a boolean.

console.log(tesla.hasOwnProperty("tyres")); // false
console.log(tesla.hasOwnProperty("driver")); // true

// This method is to be replaced with hasOwn(), but it works the same.

console.log(Object.hasOwn(tesla, "tyres")); // false
console.log(Object.hasOwn(tesla, "driver")); // true
