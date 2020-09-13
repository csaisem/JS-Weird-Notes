// 34. Functions are objects
// This is a function statement
function greet() {
    console.log('hi');
}

greet.language = 'english' // Like an object we can add properties to an existing function


// 35. Function statements & expressions
// Function statements can be called before their code. A function expression cannot.
greet();
function greet() {
    console.log('hi');
}

// If we call a function expression before its code, only the variable gets hoisted, and by defualt will be set to undefined.
makeAnonymousGreet(); // 
// This is a function expression.
var makeAnonymousGreet = function() {
    console.log('hi');
}

// Remember functions are objects. Function expressions can create primitive values, like strings & numbers, and even objects (functions) on the fly.
function log(a) {
    a(); // This invokes a
}

log(function() {
    console.log('hi');
})
