// 37. Objects, functions, 'this'
console.log(this);              // Points to window (global) object in browser

function a() {                  // Even if 'this' is within a function expression or statement, this will point to the global namespace
    console.log(this);
    this.newVariable = 'hello'; // newVariable is technically in the global scope AKA outside this function due to the way 'this' behaves
}

a();

var c = {
    name: 'The c object',
    log: function() { 
        var self = this;         // Replace 'this' with self so 'this' no longer points to global object
                                 // *However this is not working as intended. Have to manually change all 'this' to self for it to work
        this.name = 'Updated c object'; // We can now mutate properties in an object
        console.log(this);       // 'this' now becomes the object of the variable c
    
        var newName = function(a) {
            this.name = a;       // Using 'this' in a function within a function of an object points it back to the global namespace. It is a bug
        }
        newName('Updated c objects again!');  
        console.log(this);
    }
}

c.log();