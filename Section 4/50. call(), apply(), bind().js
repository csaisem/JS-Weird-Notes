var person = {
    firstName: 'Charles',
    lastName: 'Mesias',
    getFullName: function() {
        var fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
}
// There are two ways to use the bind method
var logName = function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName())

}.bind(person) // 1st., it can be added on the end of a function object and allows the 
               // this keyword to reference the method of the object passed on the 
               // .bind parameter
logName();

var logPersonName = logName.bind(person); //bind the person object to the logName object

// 2nd. method is to create a new variable and assign the .bind to the function object. 
// The .bind creates a copy of the logName function object essentially replaces the this
// keyword with the person argument
logPersonName();

logName.call(person, 'es', 'en');
// .call invokes the function, but controls where the this variable points to
// It does not make a copy like .bind, but executes the function

logName.apply(person, ['es', 'en']);
// .apply does the same as .call but wants the parameters in an array

(function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName())

}).apply(person, ['es', 'en']);
// Becuase .apply and .call executes the function, it can also be added at the end of a function expression to invoke it


// function borrowing
var person2 = {
    firstName: 'Ann',
    lastName: 'Tongco'
}
console.log(person.getFullName.apply(person2)) // apply the getFullName method from person to person2
// You can grab methods from other objects as long as they have similar property names with .bind/ .call
// person2 is replacing person


// function currying - creating a copy of a function but with preset parameters
var multiply = (a, b) => a*b 
var multiplyByTwo = multiply.bind(this, 2); // passes on 2 as a permanent parameter of a
console.log(multiplyByTwo(4))