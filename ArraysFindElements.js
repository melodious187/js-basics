
// Finding prmitive Elements in an array

// const numbers = [1, 2, 3, 1, 4];

// console.log(numbers.indexOf(1, 2));
// console.log(numbers.lastIndexOf(1));

// console.log(numbers.indexOf(1) !== -1);
// console.log(numbers.includes(1));

const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},

];

const course = courses.find(function(course) {
    return course.name === 'a';
});

console.log(course);


const course2 = courses.findIndex(function(course) {
    return course.name === 'b';
});

console.log(course2);
