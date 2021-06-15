
const numbers = [1, 2, 3];

//  every() checks all elements
const allPositive = numbers.every(function(value){
    return value >= 0;

});

console.log(allPositive);

// some() checks if any element matches
const atLeastOnePositive = numbers.some(function(value){
    return value >= 0;

});

console.log(atLeastOnePositive);