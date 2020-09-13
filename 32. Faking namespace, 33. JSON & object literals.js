var greet = 'Hello';
var greet = 'Hola';

console.log(greet); // Takes the last variable change

var english = {};
var spanish = {}; // Create objects here 

spanish.greet = 'Hola!';
english.greet = 'Hello!'; // This lets us separate our greeting by language and adds it into the object in the previous lines

// Can also create via object literal syntax
var english = {
    greetings: {
        basic: 'Hello!'
    }
}
console.log(english);

// 33. JavaScriptObjectNotation (JSON) and object literals
// This is the old way of sending data over the internet, which wasted bandwidth
<object>
    <firstname>Mary</firstname>
    <isAProgrammer>true</isAProgrammer>
</object>

// Now it became this, using object literal syntax
// JSON != object. Unlike an object, properties are wrapped in quotes. Cannot use functions as values
{
    'firstName': 'Mary',
    'isAProgrammer': true
}

// JSON can be applied to any object
var objectLiteral = {
    firstName: 'Mary',
    isAProgrammer: true
};
// This converts the object to a jSON string
console.log(JSON.stringify(objectLiteral))

// This converts a string into an object for JSON. The string should be formated like an object with properties in quotes
var jsonValue = JSON.parse('{ "firstname": "Mary", "isAProgrammer" : true}');
console.log(jsonValue);