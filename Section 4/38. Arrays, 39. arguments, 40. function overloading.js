// 38. Arrays - a collection of anything
var arr = [
    3,               // number
    false,           // boolean
    'string',        // string
    {                // object
        name: 'Charles',
        address: 'Nunya business'
    },
    function(name) { //function expression !!function statements in an array are an expression because something is attached to it
        var greeting = 'Hello ';
        console.log(greeting + name);
    }
]

arr[4]('Kevin');     // Invoking the function in my array
arr[4](arr[3].name); // Invoking the function in my array with a parameter located in the same array


// 39. 'arguments' and SPREAD
function greet(firstName, lastName) {

    lastName = lastName || 'Stranger' // create a default if no arguments are set

    console.log(firstName)
    console.log(lastName)
    console.log(arguments)      // By default functions have an 'arguments' parameter.  
                                // It logs the arguments of the function in an array-like structure.
    console.log(arguments[1])   // You can even access the array-like structure 
}

greet('Charles');

//SPREAD is something newly impremented in JS in which you can add extra arguments saved to a parameter using ...parameter in the function paramenter

// 40. FRAMEWORK ASIDE: Function Overloading
var greet = function (firstName, lastName, language) {

    if (language === 'en') {
        console.log('Hi ' + firstName + ' ' + lastName)
    }
    
    if (language === 'es') {
        console.log('Hola ' + firstName + ' ' + lastName)
    }
}

// You can create a function using another function and set a preexisting arugment to save time from writing it everytime
function greetEnglish(firstName, lastName) {
    greet(firstName, lastName, 'en');
}

function greetSpanish(firstName, lastName) {
    greet(firstName, lastName, 'es');
}
