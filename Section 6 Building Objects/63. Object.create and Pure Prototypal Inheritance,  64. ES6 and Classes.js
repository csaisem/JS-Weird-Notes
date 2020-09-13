// 63. Object.create

const { first } = require("underscore")

var person = {
    firstName: 'Defualt',
    lastName: 'Defualt',
    greet: function() {
        return 'Hi ' + this.firstName
    }
}

var john = Object.create(person) // Creates an empty object with the original's prototype
john.firstName = 'John' // Now we can manipulate the default values as needed
console.log(john)

// Polyfill: code that adds a feature which the engine may lack, like older browsers thats dont support Object.create


// 64. ES6 and Classes

class Person {
    constructor(firstName, lastName) {
        this.firstName; firstName;
        this.lastName; lastName;
    }
    greet() {
        return 'Hi ' + firstName
    }
}

class InformalPerson extends Person {   // this is now how you set the prototype, using extends
    constructor(firstName, lastName) {
        super(firstName, lastName)
    }
    greet() {
        return 'Yo ' + firstName
    }
}

var Charles = new Person('Charles', 'Mesias')
console.log(Charles)
// Syntactic sugar: a different way to type something that doesn't change how it works under the hood