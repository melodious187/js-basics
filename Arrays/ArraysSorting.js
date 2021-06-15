
// const numbers = [2, 3, 1];
// console.log(numbers);

// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

const courses = [
    { id: 1, name: 'Node.js'},
    { id: 2, name: 'JavaScript'}
]

// Sort array in apha by name
courses.sort(function(a, b) {
// a < b => -1
// a > b => 1
// a === b  => 0

// Convert to uppercase
const nameA = a.name.toUpperCase();
const nameB = b.name.toUpperCase();


if (nameA < nameB) return -1;
if (nameA > nameB) return 1;
return 0;
});


console.log(courses);