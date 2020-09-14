var students = ['Charles', 'Jacob', 'Steven']
function logName(name) {
	console.log(name)
}
logName(students[0]); // output student at 0 index

// if we wanted to log every student at one time we could use a for loop
for (var i = 0; i < students.length; i++) {
    logName(students[i])
}

// an even faster method is to use the built in forEach method available to every array
students.forEach(logName) // we pass in the function 
students.forEach(function logName(name) { // same thing here but with the function written out
	console.log(name)
})


// Our own forEach function 
function forEach(myArray, myFunction) {
    for (var i = 0; i < myArray.length; i++) {
        myFunction(myArray[i])
    }
}
// running the function with on-the-fly array
forEach(['hello', 'everybody'], function(parameter) { // we add a parameter here similar to how logName used one to log the students names
    console.log(parameter)
})
