const output = fizzBuzz(false);
console.log(output);

function fizzBuzz(input){
    if (typeof input !== 'number') return 'Not a Number';
    if (input % 15 === 0) return 'FizzBuzz';
    if (input % 5 === 0) return 'Buzz';
    if (input % 3 === 0) return 'Fizz';
    return input;

}