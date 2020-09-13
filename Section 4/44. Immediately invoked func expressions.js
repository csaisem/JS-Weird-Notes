// 44. IEFE
// An Immediately Invoked Function Expression means a function expressions is called at the 
// end of the code rather than after (on a brand new line)
var greeting = function(name) {

    return 'Hello ' + name + '. We just called this IEFE by logging it into the console'

}('Charles')// here is the expression being invoked

console.log(greeting); // because it is invoked already, we only need to log the string into the console

// another example
var greeting = function(name) {

    console.log('Hello ' + name + '. We called this IEFE by its string name')

}('Charles')

greeting;              // if console.log is in the function, we call the string after like so
                       // notice the lack of parenthesis because we are not invoking it > greeting() <, just calling it 

// Strings, numbers, & objects can all sit in code by itself. It just won't do anything.
3;
'I am a string'; 

// Function expressions can do the same as well, however we have to enclose it in parenthesis otherwise JS is expecting
// a function statement
(function (name) {

    console.log(`Hello ${name}. We invoked an IEFE on the fly using parenthesis.`)

} ('Charles'))          // invoke it before or after the parenthesis of the expression
                        // it is an artistic choice

// 45. IEFEs & safe code
// IEFEs wrapped in parenthesis are considered safe code because variables decalared in the function will not collide with
// other variables regardless of the location

// If we do want a variable to purposely collide with a global variable within an IEFE we do so by referencing the global windows,
// like so:

var greeting = 'Hola'
(function (
    global,  // here we add a parameter for the global object in the browser
    name) {

    var greeting = 'Hello'
    console.log(greeting + name)

}(  window,  // here we reference our global object in the browser, 'window'
    'Charles'))     