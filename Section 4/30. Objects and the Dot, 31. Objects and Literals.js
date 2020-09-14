// Object = collection of values: primitives (property), another object (property), or a function (method) 
// 30. Objects and the Dot
var person = new Object();

person['firstname'] = 'Tony'; //[] = computed member access
person['lastname'] = 'Alice';

var firstNameProperty = 'firstname';

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname);
console.log(person.lastname);

person.address = new Object(); // Creates new object to the person object
person.address.street = '111 Main St.'; // Adds new property to the object on the fly
person.address.city = 'New York';
person.address.state = 'NY';

console.log(person.address.city); //Dot operator is the preferred method
console.log(person['address']['city']); // Not preferred method. Not as clean

// 31. Objects and Literals
// This is an object literal syntax and is declaring person is an object
// This creates an object in memory
var Charles = {                  
    firstname: 'Charles', 
    lastname: 'Mesias',
    address: {
        street: '111 Main St',
        city: 'New York',
        state: 'NY'
    }};

function greet(person) {
    console.log('Hi ' + person.firstname)
};

greet(Charles);

// Creating an object on the fly, passing it through a function
greet({
    firstname: 'Sirelle',
    lastname: 'Ma boy'
});

Charles.address = {
    street: '10220 Foothill Blvd'
}
