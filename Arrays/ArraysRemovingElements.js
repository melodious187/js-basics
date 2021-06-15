
let numbers = [1, 2, 3, 4];
let another = numbers;

// End
// const last = numbers.pop();
// console.log(numbers);
// console.log(last);

// // Beginning
// const first = numbers.shift();
// console.log(numbers);
// console.log(first);

// Middle
// const middle = numbers.splice(2, 2);
// console.log(numbers);

// 
// Emptying an Array
// 

// // Solution 1 - not the best and prone to bugs
// numbers = [];
// console.log(numbers);

//  Solution 2 - set length to zero 0
// numbers.length = 0;
// console.log(numbers);
// console.log(another);

//  Solution 3 - use splice to set all values
// numbers.splice(0, numbers.length);
// console.log(numbers);
// console.log(another);

// Solution 4 - use the pop method - not super efficient as it calls the pop for each value in array
while (numbers.length > 0)
    numbers.pop();
console.log(numbers);
console.log(another);