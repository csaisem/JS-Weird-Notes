// Closures part 1

/* When a function has a function within, the inner function has reference to the memory of the variables created by the outer
   function after its execution. The inner function closes in all the variables that it has access to, which is what makes it
   a closure */

function greet (whattosay) {

    return function(name) {
        console.log(`${whattosay} ${name}`)
    }
}

greet('Hi')         // This returns the anonymous function
greet('Hi')('Tony') // This is how we invoke the inner anonymous function

var sayHi = greet('Hi')
sayHi('Tony')       // After setting the greet function to a variable, we can invoke the inner function like so
                    // this is similar to line 10

var sayHi = function(name) {
    console.log(`${whattosay} ${name}`)
    
}

// 47, Closures pt.2
function buildFunctions() {

    var arr = []

    for (i = 0; i < 3; i++) {
        // let j = i in ES6 we only need to add this in order to get our expected output of 0,1,2
        arr.push(
            function() {
                console.log(i)
                // console.log(j) we replace i with j to get our expected output
        })
    }
    
    return arr
}
var fs = buildFunctions()

fs[0]()
fs[1]()
fs[2]()
/* The expected output is 3 for all invocations due to how console.log is being invokd in the
arr.push*/


// In ES5 this is how to get the expected output of 0,1,2
function buildFunctions2() {

    var arr = []

    for (i = 0; i < 3; i++) {
        arr.push(
            // We use IEFE to log every instance of i and push it into the array
            (function(j) {
                return function() {
                    console.log(j)
                }
            })(i)
        )
    }
    return arr
}

var fs2 = buildFunctions2()

fs2[0]()
fs2[1]()
fs2[2]()