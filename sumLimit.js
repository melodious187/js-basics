console.log(sum(12));

// Calculate the sum of the Multiples of 3 and 5

function sum(limit){
    // let total = 0;
    // for (let i =0; i <= limit; i++) {
    //     if (i % 5 === 0 ) total = total + i;
    //     if (i % 3 === 0 ) total = total + i;
    // }
    // return total; 

   let total = 0;

   for (i = 0; i <= limit; i++)
    if (i % 3 === 0 || i % 5 === 0 )
        total += i;
   return total
}