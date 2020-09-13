function sayHiLater () {

    var greeting = 'Hi'
    // With setTimeout we have been using first class functions all along, as well as taking advantage of
    // using closures
    setTimeout(
    // It uses a function object as a parameter
        function() {console.log(greeting)
    }, (3000));
    // After sayHiLater is ran, the setTimeout function knows greeting = 'Hi' long after it was executed 
    // because of closures. The greeting variable sits in memory rather than disappears. 
}

sayHiLater()

// Callbacks work by when a function is invoked, it in return invokes another function
// It is a function that uses another function as a parameter and is invoked within the 
// first function
function tellMeWhenDone (callback) {
    callback()
}

tellMeWhenDone(function() {
    console.log('Hello There')
})