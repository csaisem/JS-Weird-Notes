// In the topic of functional programming, we are going to turn this code into a cleaner version
// that can be used on other arrays
var arr1 = [1,2,3]
console.log(arr1)

var arr2 = []
for (var i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2)
}

console.log(arr2)

function mapForEach (arr, fn) {

    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        )
    }

    return newArr;
}
var arr1 = [1,2,3]
var arr2 = mapForEach(arr1, function(item) {
    return item * 2
})
var arr3 = mapForEach(arr1, function(item) {
    return item < 2
})

console.log(arr2)
console.log(arr3)

var checkPastLimit = function(limiter, item) {
    return item > limiter
}
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4)
/* alternative view, but not syntactically allowable:
var arr4 = mapForEach(arr1, checkPastLimit(1, arr1){
    return arr1 > 1
}) */

var checkPastLimitSimplified = function(limiter) {
    return function(limiter, item) {
        return item > limiter
    }.bind(this, limiter);
} 
// 
var arr5 = mapForEach(arr1, checkPastLimitSimplified(1))
console.log(arr5)

// Functional programming pt2
var arr1 = [1,2,3]
var arr6 = _.map(arr1, function(item) {
    return item * 3
})
console.log(arr6)

var arr7 = _.filter([2,4,5,6,9,10], function(item){ return item % 2 === 0})
console.log(arr7)
