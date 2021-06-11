
const output = fizzBuzz(null);
console.log(output);

function fizzBuzz(input){
    if (typeof input !== 'number')
        return 'Not a Number'; 

if ((input % 3 === 0) && (input % 5 !== 0)) return 'Fizz';
if ((input % 5 === 0) && (input % 3 !== 0)) return 'Buzz';
if ((input % 5) === 0 && (input % 3 === 0)) return 'FizzBuzz';
if ((input % 5) !== 0 && (input % 3 !== 0)) return input;

// return (input % 15 ? (input % 5 ? (input % 3 ? input : 'Fizz') : 'Buzz') : 'FizzBuzz');

}