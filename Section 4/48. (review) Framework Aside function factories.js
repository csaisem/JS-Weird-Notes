// Similar to the code from 40. Function overloading, this rewrites the code with an understanding of closures
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
