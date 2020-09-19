// jQuery Part 1
/* jQuery is a library that helps in typing syntax & deals with cross browser compatibility
 * jQuery allows you to manipulate the DOM, which is what the browser engine uses to manipulate and structure the HTML file
 * and how it renders it 
 */

// jQuery Example:

var q = $("ul") // Output all ul class in html file
var q = $("ul.people li") // Goes within child branch then grandchild branch AND
console.log(q)            // outputs jQuery.fn.init[3]
/* 
 * jQuery.fn.init[3] 
 * The above is what we see in the console. The 3 is for the 3 separate grandchild tree under the class tree
 * It is an expected line of code resulting from the jQuery library.
 */

// You can store an IEFE in an IEFE


// The following is an example of method chaining: calling one method after another, with each method affecting
// the parent object
var q = $("ul.people").addClass("newclass") // adds a newclass
.removeClass("people") // removes class within the chain

// method chaining works becuase of jQuery's use of 'return this'