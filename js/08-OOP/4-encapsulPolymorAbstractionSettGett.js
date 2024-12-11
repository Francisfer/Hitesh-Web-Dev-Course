/* 

------------------------------- 1. Encapsulation. -------------------------------

  --> Encapsulation is very easy concept, it simply means that i want to restrict the direct access to the object data.


  --> On the following code, we have a class that has a variable called balance. We don't want anybody to have access to this data.


  --> By placing an #, we are defining the property/variable as private, we can do the same with methods.


  --> Inside the class, we can access the variable easily, that is the whole idea of encapsulation.
  
  
  --> If somebody wants to access this, we need to provide a custom method through setters or getters. Also, as the example shows, we allow indirect access to balance upon a deposit.


  --> Whenever we protect the data like this, encapsulate it, we don't totally hide it, we want to return it somehow, but never in a direct way.

    -> For the objects to access this property, we usually add some restrictions, for example, not returning the data in the number format.


  --> Of course, in real situations, the balance needs to be retrieved from the database, we need to transform it, make more filters, etc.
*/

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount; // Easy access inside of the class.
    return this.#balance; // Indirect access upon deposit.
  }

  getBalance() {
    return `Your balance is $ ${this.#balance}.`; // Restrict access.
  }
}

let account = new BankAccount();

// When we do account. we can see deposit, get balance but no #balance.
// If we try to access it, because we know it exists:

// console.log(account.balance); // undefined
// console.log(account.#balance); // Error thrown

// console.log(account.getBalance());

/* ------------------------------- 2. Abstraction. ------------------------------- */

/* 

--> Just like the name says, abstraction hides the complex implementation detail.


--> Basically just talks about abstracting the code complexity, with higher order methods. 

*/

/* ------------------------------- 3. Polymorphism. ------------------------------- */

/* 

--> Talks about the ability of overwriting the behavior of a method or property on a extended class.


--> See 3. classesObjectsInheritance, because polymorphism is related with the use cases when we might write another constructor on a extended class. That is also polymorphism.

--> Here, we can see that the Penguin class is extended from Bird, the method has the same name, it is the same, but the behavior is different.

*/

class Bird {
  fly() {
    return `Birds can fly!`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins can't fly!`;
  }
}

let bird = new Bird();
// console.log(bird.fly());

let penguin = new Penguin();
// console.log(penguin.fly());

/* ------------------------------- 4. Static ------------------------------- */

/* 

--> When we create the classes, we have things like the constructor, the private properties (#) which make things private and also what is called static methods.


--> Static is a keyword, it can be anything, a method or a property/variable.


--> Static means that the method or property can only be called or accessed by the class itself. Nobody else can all it.


--> There are use cases where we want this kind of behavior.


--> Static methods are often used for utility functions that provide general-purpose operations not tied to a specific instance.


--> Best Practices:

  -> Encapsulation: Use static methods for functionality that doesn't depend on an instance, to avoid cluttering object prototypes unnecessarily.

  -> Readability: Clearly distinguish instance-based behavior from static methods to maintain readable and maintainable code.

  -> Singleton Use Cases: Use static properties carefully when implementing global states to avoid unwanted side effects in complex applications.


--> Common scenarios for the use of static methods


*/

// 1. Scenario: Validation utilities

class Validator {
  static isEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static isStrongPassword(password) {
    return password.length >= 8;
  }
}

// Usage
// console.log(Validator.isEmail("user@example.com")); // true
// console.log(Validator.isStrongPassword("12345"));  // false

////////////////////////////////////////////////////////////////////

// 2. Factory Methods - Static methods are useful for creating instances of a class with specific presets.

// Scenario: Creating vehicles with predefined configurations:

class Vehicle {
  constructor(type, wheels) {
    this.type = type;
    this.wheels = wheels;
  }

  static createCar() {
    return new Vehicle("car", 4);
  }

  static createMotorcycle() {
    return new Vehicle("motorcycle", 2);
  }
}

// Usage
const car = Vehicle.createCar();
// console.log(car); // Vehicle { type: 'car', wheels: 4 }

////////////////////////////////////////////////////////////////////

// 3. Counters or Singleton Patterns - Static properties can store shared state, such as counters or a single instance of a class.

// Scenario: Tracking the number of instances created:

class User {
  static count = 0;

  constructor(name) {
    this.name = name;
    User.count++;
  }
}

// Usage
const user1 = new User("Alice");
const user2 = new User("Bob");
// console.log(User.count); // 2

////////////////////////////////////////////////////////////////////

// 4. Shared Configuration - Static properties can hold configuration settings that are relevant to all instances of the class.

// Scenario: A database configuration:

class Database {
  static config = {
    host: "localhost",
    port: 3306,
  };

  constructor(name) {
    this.name = name;
  }
}

// Usage
// console.log(Database.config.host); // localhost

////////////////////////////////////////////////////////////////////

// 5. Accessing Private Data Without an Instance - Static methods can interact with private data or functionality when you don't have an instance.

// Scenario: Cryptographic keys:

class Crypto {
  static #privateKey = "some_private_key";

  static getPrivateKey() {
    return Crypto.#privateKey;
  }
}

// Usage
// console.log(Crypto.getPrivateKey()); // some_private_key

////////////////////////////////////////////////////////////////////

// 6. Extending Class Behavior - Static methods can serve as a way to enforce specific patterns when a class is extended.

// Scenario: A base logging class:

class Logger {
  static log(message) {
    console.log(`[LOG] ${message}`);
  }
}

class AppLogger extends Logger {
  static log(message) {
    super.log(`App: ${message}`);
  }
}

// Usage
// AppLogger.log("Application started"); // [LOG] App: Application started

////////////////////////////////////////////////////////////////////

// 7. Data Models and Services - Static methods can represent actions for data manipulation or interaction with external services.

// Scenario: Fetching data from an API:

class APIService {
  static baseUrl = "https://api.example.com";

  static async fetchData(endpoint) {
    const response = await fetch(`${this.baseUrl}/${endpoint}`);
    return response.json();
  }
}

// Usage
// APIService.fetchData("users").then((data) => console.log(data));

/*

////////////////////////////////////////////////////////////////////

*/

// --> In this example we will create a Class which has a static method.

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

// Since it is a static method, we cannot access it through the instances created.

let miniCalc = new Calculator();
// console.log(miniCalc.add(5, 5)); // TypeError: miniCalc.add is not a function

// So, since this does not work, how can we use it? Only through the class itself.

// console.log(Calculator.add(5, 5));

/* ------------------------------- 5. Getters and Setters  ------------------------------- */

/* 

--> Remember this example:

class Vehicle {
  constructor(type, wheels) {
    this.type = type;
    this.wheels = wheels;
  }


--> Notice that there are properties in the class Vehicle, which are type and wheels. Anybody can access this.


--> If we want to make them private, we can add the (#) this.#type = type;


--> Like this, they would become inaccessible, we cannot SET them or GET them. For that we need to create special methods to set them of get them and, like this, expose them.


--> For every property that we define in the constructor, we can have setters and getters.


--> This means that we are controlling how we are adding a value to that property or how we are able to access that property.


--> This means more control, and more control is always good in programming.


--> The _ was used before the ability of (#), remember jonas javascript. It's just a convention for other developers know that the property should be private, although we can access it.

  -> Like this, they know that there are getters and setters for that particular property and they shouldn't access it directly. 

  -> Also, setters and getters allows us to put some restrictions like in salary.


*/

/* 

class Employee {
  constructor(name, salary) {
    this.name = name;
    this._salary = salary; // Notice the _, this does not do anything but signaling/convention.
  }
}
let emp = new Employee("John", 5000);
console.log(emp._salary); */ // 5000 - We can access it at this point.

/* 

--> So, since we have access to salary, how can we get it or set it in a customized way? 

  -> We can define a methods - setters and getters.

  -> We get rid of the _.

  -> We define a empty private variable for salary, by empty we mean without let or const. That property should be placed outside of the constructor.

  -> Notice that the setter and the getter do NOT have the #. Because salary is a method, it's not directly related to #salary.


--> Now we need to customize some restrictions on the constructor, like checking if the value of salary is positive, just like we did on the setter.


--> We need to do this because, when we create a new instance (invoking the constructor), the setters and getters are not called.


*/
class Employee {
  #salary; // How we define variables in a class.
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary cannot be a negative value!");
    }
    this.name = name;
    this.#salary = salary; // Notice the _, this does not do anything but signaling/convention.
  }

  get salary() {
    return `You are not allowed to see salary`;
  }

  set salary(value) {
    if (value < 0) {
      console.error("Invalid, salary must be a positive value.");
    } else {
      this._salary = value;
    }
  }
}

// Now you might think that, to access the get and set method we would do it like this:
// let emp = new Employee("Andre", 5000);

// console.log(emp.salary()); // TypeError: emp.salary is not a function

// It throw us an error because they are not regular methods, they have the keywords get and set before them.

// The way of accessing it is like any other value.

// console.log(emp.salary); // You are not allowed to see salary

// After removing the _ and customizing the constructor, we now cannot invoke the constructor with a negative salary.

// let emp = new Employee("Andre", -5000); // Error: Salary cannot be a negative value!

let emp = new Employee("Andre", 5000);
emp.salary = 60000;
console.log(emp.salary);
