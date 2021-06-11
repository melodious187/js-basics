
const output = fizzBuzz(128);
console.log(output);

function fizzBuzz(inputNum) {
    if (typeof inputNum !== 'number') return 'Not a Number';
    if (inputNum % 15 === 0) return 'FizzBuzz';
    if (inputNum % 5 === 0) return 'Buzz';
    if (inputNum % 3 === 0) return 'Fizz';
    return inputNum;
}