
const numbers = [1, -1, 2, 3];

// Calculate the sum of all items in the array

let sum = 0;
for (let n of numbers)
    sum += n;

console.log(sum);

// Using the reduce method 
// a=0, c=1 => a=1
// a=1, c=-1 => a=0
// a=0, c=2 => a=2
// a=2, c=3 => a=5
// 
const sum2 = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(sum2);

//  convert to a single line of code

const sum3 = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);

console.log(sum3);