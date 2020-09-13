// 53. Classical vs prototype inheritance

/* Inheritance - one objects gets access to the properties and methods of another object
Classical inheritance - the most popular method for a while now, old school. Can get verbose and confusing
Prototypal inheritance - newer method. Simple, flexible, easy to understand */


// 54. Understanding the prototype

/* All objects (including functions) have access to properties and prototypes (a prototype is just another object)
We can create a property in a prototype and accss it with the dot operator from the original object, without having
to reference the prototype. Prototypes can have prototypes, which create a prototype chain. Access their properties
is no different than accessing the first prototype's property. 
When a second object is created, it can also reference the prototype of the first object with the same dot property
method */

var person = {
    firstName: 'Default',
    lastName: 'Default',
    getFullName: function() {
        return this.firstName + ' ' + this.lastName
    }
}

var me = {
    firstName: 'Charles',
    lastName: 'Mesias'
}

// An example of how not to do it DT it can make your app run slow
me.__proto__ = person;
console.log(me.getFullName()); // returns 'Charles Mesias'
console.log(me.firstName); // returns 'Charles'

var jane = {
    firstName: 'Jane'
}

jane.__proto__ = person;
console.log(jane.getFullName()); // returns 'Jane Default'


// 55. Everything is an object (or a primitive)

var a = {} // the very bottom of the prototype chain is this base object    
var b = function() {} // this automatically has a prototype of function
var c = [] // this automatically has a prototype of array

// Even if empty, these three types automatically have a prototype property attached to them set by the javascript engine. Each prototype property
// is specifc to its object, function, array. In the console you can access their respective methods even if the object, function, or array are empty
// because it goes down the chain and reference the prototype property, which has these built in methods. 

// Also note that the prototype of a function and an arrays prototype is an object. The object prototype does not have one becuase the object is the
// very base of the prototype.
