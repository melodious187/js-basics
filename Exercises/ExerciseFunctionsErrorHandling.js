
try {
    const numbers = [1, 2, 3, 4, 1, 2, 1, 12];
    const count = countOccurrences(numbers, 1);
    console.log(count);
}

catch (e) {
    console.log(e.message);
}


function countOccurrences(array, searchElement) {
    if (Array.isArray(array) !== true)
        throw new Error('First argument is not an array');
    return array.reduce((a, c) => {
        const occurrence = (c === searchElement) ? 1 : 0;
        return a + occurrence;
    }, 0)
}


