
//  Create an array from the range provided
const numbers = arrayFromRange(10, 1);
console.log(numbers);



function arrayFromRange(min, max) {
    //  Define the array
    const minMax = [];
    for (let i = min; i <= max; i++)
        minMax.push(i);
    return minMax;
}