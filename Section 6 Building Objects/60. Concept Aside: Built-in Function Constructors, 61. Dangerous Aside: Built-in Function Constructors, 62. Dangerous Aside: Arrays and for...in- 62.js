// 60. Conceptual Aside: Built-in function constructors

// Primitives have methods becuase they are boxed into an object that contain their primitive value
// is an object created with this function constructor
var a = new Number (3)
var b = new String ('Charles')

// Knowing this we can add our own methods that will affect all primitive values as we please
String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit;
}
// All strings now have access to this. Many libraries and frameworks use this to add features, concepts, ideas, and utilities

console.log('Charles'.isLengthGreaterThan(5))

Number.prototype.isPositive = function() {
    return this > 0
}
 
console.log(a.isPositive()) // for number to access the method we need to assign it to a variable first, can't just call it on the number itself

// !! Generally you don't want to use function constructors with primitives unless you absolutely have to !!


// 61. Dangerous Aside: Built-in function constructors
var a = 3
var b = new Number(3)

a === b  // returns false, a is a primitive, b is an object 
// Know when you're creating an object or a primitive as it can cause confusion if trying to use/ manipulate these values

var c = Number(3) // same as line 26, just another way of declaring primitives to a variable

//When manipulating dates, use momentjs.com for their code


// 62. Dangerous Aside: Arrays and for...in
Array.prototype.myCustomFeature = 'Cool!'
var arr = ['John', 'Jane', 'Jim'] // an array is an object with a key: value pair of index: element. Each value added is essentially a property


for (var prop in arr) {
    console.log(prop + ": " + arr[prop])
}
// In the case of arrays we don't use for...in becuase we also iterating over all the prototypes and methods added to the array object, using
// up unncessary memory. Thus we use the standard:
for ( let i = 0; i < arr.length; i++) {}
