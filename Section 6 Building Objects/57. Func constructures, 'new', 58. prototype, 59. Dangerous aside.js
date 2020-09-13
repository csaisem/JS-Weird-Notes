// 57. Javascript history: its called Javascript to pull in JAVA devs

// Function constructors are functions used to specifically create an object using the this keyword
function Person(firstName, lastName) {
    
    console.log(this)
    this.firstName = firstName
    this.lastName = lastName
    console.log('This function is being invoked.')
}

var john = new Person('John', 'Doe') // 'new' changes what the this variable points to; it now points to the new empty object john
console.log(john)

var jane = new Person('Jane', 'Doe')
console.log(jane)


// 58. Function constructors and 'prototype'
// The prototype property of the function constructor belongs to all objects created from it. This allows us to create a method once
// that 1000s of objects can have access to
function Person(firstName, lastName) {
    
    console.log(this)
    this.firstName = firstName
    this.lastName = lastName
    console.log('This function is being invoked.')
}

// It is better to put methods on the prototype so only one copy is created and used by 1000s of objects
// Whereas if it were on the constructor, that would be 1000 objects with 1000 copies of that method, using up unnecessary memory!
Person.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName
}

var john = new Person('John', 'Doe')
console.log(john)

var jane = new Person('Jane', 'Doe')
console.log(jane)

console.log(john.getFullName())

// We can create additonal methods that objects created with the function constructor can have access to 
// If we have 1000 objects, they now have access to the method below:
Person.prototype.getFormalFullName = function() {
    return this.lastName + ', ' + this.firstName
}

var Charles = new Person('Charles', 'Mesias')
console.log(Charles.getFormalFullName())


// 59. Dangerous aside: 'new' & functions
// Generally in javascript we want function constructors to have an uppercase name
// This will help so when we create an object via constructor, and we forget the 'new' keyword, we can spot it
// Without the new keyword, objects return undefined
// Linters can help with identifying constructor objects that may be missing the 'new' keyword