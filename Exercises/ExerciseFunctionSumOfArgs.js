
// Create a function that returns a sum of the arguments passed
// sum(1, 2, 3, 4) => 10

// First, old fashioned answer
// function sum(...items) {
//     let total = 0;
//     for (values of arguments)
//         total += values;
//     return total;
// }
// 
// console.log(sum(1, 2, 3));

// Answer using reduce and the arrow function

console.log(sum(1, 2, 3, 4, 5, 6));

function sum(...items) {
    return items.reduce((a, b) => a + b);
}

