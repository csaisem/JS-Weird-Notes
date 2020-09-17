// 65. Initialization
var people = [
    {
        firstname: 'John',
        lastname: 'Doe',
        addresses: [
            '111 Main St.',
            '222 Third St.'
        ]
    },
    {
        firstname: 'Jane',
        lastname: 'Doe',
        addresses: []
    }
]

// 66. 'typeof', 'instanceof, 'and Figuring Out What Something Is
// 'typeof' is a function that returns a string, it tells us what something is; number, string, object, etc
// 'instanceof' deals with object chains and tells us what something has in its prototpye chain

var b = 'Hello'
console.log(typeof b) // returns string becuase b is a string

var d = []
console.log(typeof d) // returns object, which is weird
console.log(Object.prototype.toString.call(d)) // returns object array

function Person(name) {
    this.name = name;
}

var e = new Person('Jane')
console.log(typeof e) // returns object 
console.log(e instanceof Person) // returns true
// instanceof returns true or false if any object down the prototype chain of e has Person in it 

console.log(typeof undefined) // returns undefined
console.log(typeof null) // returns object, its a bug

// 67. Stict Mode

// Strict mode is a mode in which a variable cannot be set without declaring it first.
// The purpose of this is to avoid creating mistakes made by creating one vairable and using another with a similar name

function logNewPerson() {
    'use strict';

    var person2
    persom2 = {}
    console.log(persom2) // returns an error because persom2 isn't declared
}

var person
persom = {}
console.log(persom) // returns an empty object
logNewPerson

// the main use of strict mode is for spelling errors, like mistyping person as persom,
// but it can cause its own problems if you add to a file not intended for strict mode

// 68. Strict Mode Reference
// go to Mozilla Developer Network to learn more about strict mode