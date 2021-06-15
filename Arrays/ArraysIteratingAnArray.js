
const numbers = [1, 2, 3];

// List each value in array numbers
for (let number of numbers)
    console.log(number);

//  Using a callback function - not ideal
numbers.forEach(function(number) {
    console.log(number);

});

// More Efficient to use the Arrow function
numbers.forEach(number => console.log(number));

// Can add the index for each value in numbers
numbers.forEach((number, index) => console.log("Index",index, "Number", number));
