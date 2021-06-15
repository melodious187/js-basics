const numbers = [1, 2, 3, 4];

// Example of 'includes' function
// console.log(numbers.includes(112));

// Write a function that takes an array 
// and searches that array for a value

const arrayIncludes= includes(numbers, 1);
console.log(arrayIncludes);

function includes(array, searchElement){
    let isIncluded=false;
    for (let key in numbers){
    if (numbers[key] === searchElement)
        isIncluded = true;        
    }
    return isIncluded;
 }