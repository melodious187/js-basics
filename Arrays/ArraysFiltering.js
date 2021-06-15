
const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(function(value){
    return value >= 0;
});

// Same result using 'fat' arrow code
const filtered2 = numbers.filter(n => n >= 0);
    


console.log(filtered2);