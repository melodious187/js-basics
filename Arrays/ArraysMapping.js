
const numbers = [1, -1, 2, 3];

// Filter for only positive numbers
const filtered = numbers.filter(n => n >= 0);


// //  create an arrays with <li> html code
// const items = filtered.map(n => '<li>' + n + '</li>');
// console.log(items);

// // Join array to get rid of array index numbers
// const html = items.join('');
// console.log(html);

// // Format as HTML
// const html2 = '<ul>' + items.join('') + '</ul>';
// console.log(html2)

//  Map objects
// const items2 = filtered.map(n => {
//     return { value: n};
// });

const items2 = filtered.map(n => ({ value: n}));
console.log(items2);

//  Chain the above mappings to a single line
// It is good form to place each mapping on a spearate line

const chain = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n}));
console.log(chain);


