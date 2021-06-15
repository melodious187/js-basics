
const numbers =[1, 2, 3, 4, 18, 123];
const max = getMax(numbers);
console.log(max);

// Start with standard solution

// Then use reduce method


function getMax(array){ 
    if (array.length === 0) return undefined;

// let maxNum = 0;
// for (element of array)
//     if (element > maxNum)
//         maxNum = element;
// return maxNum;

return array.reduce((a, b) => (a > b) ? a : b);

}







































// return array.reduce((a, b) => (a > b) ? a : b);