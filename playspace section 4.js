//Playing with by reference

var pokemon = { fireRed: 'Charizard' }; // Create new object
var digimon = pokemon;
console.log(pokemon);
console.log(digimon);

pokemon.fireRed = 'Mega Charizard'; // This mutates line 40
console.log(pokemon);
console.log(digimon);

pokemon = { leafGreen: 'Venusaur'}; // This creates a whole new object
console.log(pokemon);
console.log(digimon);



var newTrainer = function(firstName, region, gender) {

    if (gender === 'male') {
        console.log('Hello young man ' + firstName)
        console.log("So you're from the " + region + ' region')
    }
    if (gender === 'female') {
        console.log('Hello young lady ' + firstName)
    }
}
    
function maleTrainer(firstName, region) {
    newTrainer(firstName, region, 'male');
}

function femaleTrainers(firstName, region) {
    newTrainer(firstName, region, 'female')
}


maleTrainer('Charles', 'Davao');
femaleTrainers('Ann', 'Manila');


//Remaking the above function with an understanding of closures

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

var maleTrainer = newTrainer('male')
var femaleTrainer = newTrainer('female')

maleTrainer('Charles')
femaleTrainer('Ann')





var newMale = {
    firstName: 'Charles',
    lastName: 'Mesias'
}

var newFemale = {
    firstName: 'Ann',
    lastName: 'Tongco'
}

function newTrainer(gender) {

    return function (firstName, lastName) {

        if (gender === 'male') {
            return console.log('Hello young man ' + this.firstName)
        }

        if (gender === 'female') {
            return console.log('Hello young lady ' + this.firstName)
        }
    }
}

var male = newTrainer('male')
var female = newTrainer('female')
male.bind(newMale)

