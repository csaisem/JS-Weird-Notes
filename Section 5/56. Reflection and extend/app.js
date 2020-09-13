// 55. Reflection and extend

const { first } = require("underscore");

// Reflection - an object can look at itself, listing and changing its properties and methods
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

// Here we create a for in loop to check the properties of me.
for (var prop in me) {
    if (me.hasOwnProperty(prop)) { // without this if statement it would list all the properties, including the borrowed property of getFullName
        console.log(prop + ': ' + me[prop]) // now it will only log the properties the me object orignally was set with
    }
}

var jane = {
    address: '111 Main St',
    getFormalFullName: function () {
        return this.lastName + ', ' + firstName
    }
}

var jim = {
    getFirstName: function() {
        return firstName
    }
}

_.extend(me, jane, jim) // A useful underscore function that combines the property and methods of all objects passed in the argument

console.log(me)
