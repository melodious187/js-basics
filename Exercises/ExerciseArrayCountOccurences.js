
const numbers = [1, 2, 3, 4, 1, 2, 1, 12];

const count = countOccurrences(numbers, 1);
console.log(count);

function countOccurrences(array, searchElement) {
    let countNum = 0;

    for (element of array)
        if (element === searchElement)
            countNum++;
        return countNum;


    //  Use the reduce function
//  array.reduce((accumulator, current) => {
//     const occurence = (current === searchElement) ? 1 : 0;
//     console.log(accumulator, current, searchElement);
//     return accumulator + occurence;
//     console.log(accumulator);
//  }, 0);
}








































// function countOccurrences(array, searchElement){
//     let countNum = 0;
//     for (let element of array) {
    
//     if (element === searchElement) 
//         countNum++;
//     }
//         return countNum;
   
// }