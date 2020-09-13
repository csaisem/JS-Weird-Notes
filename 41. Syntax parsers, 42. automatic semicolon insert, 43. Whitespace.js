// 41. Syntax Parsers - a very short section. Javascript reads syntax by letter expects a certain wording otherwise it will throw an error.

// 42. Automatic semicolon insertion - JS automatically inserts semicolons wether it is typed or not
function person() {
    return                      // this function returns undefined because a semicolon is automatically inserted after the return
    {                           // to avoid this write the curly braces on the same line as the return to avoid the automatic insertion
        firstname: 'Charles'
    }
}

console.log(person())

// 43. Whitespace - JS is very liberal with whitespace
var 
    // JS does not care how much whitespace is used between text
    firstname, 
    // A lot of famouse libraries will have lines of comments explaining what each variable does/ will do
    lastName, 
    // for example: language can be 'en' or 'es' (require)
    language