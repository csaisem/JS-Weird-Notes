// 36. Value vs reference
// By value. Applies to primitive values. 
var a = 3;      // This creates new memory space
var b = a;      // This also creates new memory space with a copy of the reference's value
a = 2;

console.log(a); // Output new value of a, 2
console.log(b); // Output original value of a, 3


// By reference. Applies to objects  (including functions)
var a = {};     // This creates new memory space
var b = a;      // This points to the same memory space as variable a. No copy is created

var c = { greeting: 'hi' };
var d;

d = c;
c.greeting = 'hello' // This mutates/ changes the variable

console.log(c);
console.log(d);  // Both variables will output the new value 'hello'

// By reference applies to parameters too
function changeGreetings(obj) {
    obj.greeting = 'Hola'; // mutate
};

changeGreetings(d);
console.log(c);
console.log(d);   // Both variables will output the new value 'Hola'

// Equals (=) operator creates new memory space
c = { greeting: 'howdy'};
console.log(c);   // Output 'Hola'
console.log(d);   // Output 'Howdy'
