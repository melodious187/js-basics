
const numbers = [1, 2, 3, 4];

const output = move(numbers, 1, 3);

console.log(output);

function move(array, index, offest){
const position = index + offest;
    if (position >= array.length || position < 0) {
        console.error('Invalid Offest');
        return;
    }
        const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(index = offest, 0, element);
    return output;



}

