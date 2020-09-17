// In the topic of functional programming, we are going to turn this code into a cleaner version
// that can be used on other arrays
var arr1 = [1,2,3]
console.log(arr1)

// here we write code to manipulate the current arr1 and saving it into a new array, arr2
var arr2 = []
for (var i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2)
}

console.log(arr2)

// here we take the above code and turn it into a function
// the difference here is we have a 2nd parameter, fn, that uses callback to manipulate the original array, arr
function mapForEach (arr, fn) {

    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        )
    }

    return newArr;
}

// using the function with a function to multiply by 2
var arr1 = [1,2,3]
var arr2 = mapForEach(arr1, function(item) {
    return item * 2
})
console.log(arr2)

// return all items less than two
var arr3 = mapForEach(arr1, function(item) {
    return item < 2
})
console.log(arr3)

// checks if items in the array are > the limit set; returns true: false for each index
var checkPastLimit = function(limiter, item) {
    return item > limiter
}

// using the .bind method to create a preset limit; in all cases the bind value applies to the first parameter
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4)
/* alternative view, but not syntactically allowable:
var arr4 = mapForEach(arr1, checkPastLimit(1, arr1){
    return arr1 > 1
}) */

// simpliified function of the above
var checkPastLimitSimplified = function(limiter) {
    return function(limiter, item) {
        return item > limiter
    }.bind(this, limiter);
} 
// 
var arr5 = mapForEach(arr1, checkPastLimitSimplified(1))
console.log(arr5)

//alternate view of the above code
var arr51 = mapForEach(arr1, checkPastLimitSimplified = function(limiter) {
    return function (limiter, item) {
        return item > 1
    }
})

// Functional programming pt2
var arr1 = [1,2,3]
var arr6 = _.map(arr1, function(item) {
    return item * 3
})
console.log(arr6)

var arr7 = _.filter([2,4,5,6,9,10], function(item){ return item % 2 === 0})
console.log(arr7)
