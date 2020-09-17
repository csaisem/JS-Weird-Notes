// 48. Framework Aside: Function Factories
// Similar to the code from 40. Function overloading, this rewrites the code with an understanding of closures

function greet(language) {
    return function(firstName, lastName) {

        if (language === 'en') {
            console.log('Hello ' + firstName + ' ' + lastName)
        }
        if (language === 'es') {
            console.log('Hola ' + firstName + ' ' + lastName)
        }
    }
}

var greetEnglish = greet('en')
var greetSpanish = greet('es')

greetEnglish('Charles', 'Mesias');
greetSpanish('Carlos', 'Macias');



// Pokemon friendly version
function newTrainer(gender) {

    return function (firstName, lastName) {

        if (gender === 'male') {
            return console.log(`Hello young man ${firstName} `)
        }

        if (gender === 'female') {
            return console.log(`Hello young lady ${firstName}`)
        }
    }
}

var maleTrainer = newTrainer('male') // These create their own instance of memory with its own closure
var femaleTrainer = newTrainer('female')

maleTrainer('Charles')
femaleTrainer('Ann')
