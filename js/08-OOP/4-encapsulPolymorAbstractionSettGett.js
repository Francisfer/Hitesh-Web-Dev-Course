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

--> Here, we can see that the Penguin class is extended from Bird, the method has the same name, but the output is different.

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
console.log(bird.fly());

let penguin = new Penguin();
console.log(penguin.fly());

/* ------------------------------- 4. MINUTE 13 ------------------------------- */
