// call(), apply(), and bind() are methods you can use on objects with methods (functions)
var person = {
    firstName: 'Charles',
    lastName: 'Mesias',
    getFullName: function() {
        var fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
}

// There are two ways to use the bind method //

// 1st method: add the dot bind method at the end of the function 
// "this" will reference the getFullName method (function) of the person object
var logName = function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName())

}.bind(person)

logName(); // execute it 

// 2nd method: create a new variable and assign the .bind at the end of the function. 
// The .bind creates a copy of the logName function and the "this" variable will now point to
// the person method (function)
var logPersonName = logName.bind(person); //bind the person object to the logName function

logPersonName(); // execute it



// .call invokes the function, but controls where "this" points to
// It does not make a copy like .bind, but executes the function
logName.call(person, 'es', 'en');


// .apply does the same as .call but wants the parameters in an array
logName.apply(person, ['es', 'en']);

// Becuase .apply and .call executes the function, it can also be added at the end of a function expression to invoke it
(function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName())

}).apply(person, ['es', 'en']);


// function borrowing
var person2 = {
    firstName: 'Ann',
    lastName: 'Tongco'
}
console.log(person.getFullName.apply(person2)) // apply the getFullName method from person to person2
// You can grab methods from other objects as long as they have similar property names with .bind/ .call
// person2 is replacing person


// function currying - creating a copy of a function but with preset parameters
var multiply = (a, b) => a * b 
var multiplyByTwo = multiply.bind(this, 2); // passes on 2 as a permanent parameter of a
console.log(multiplyByTwo(4))