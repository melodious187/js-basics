const arrayTruthy = [7, 4, null, '', 8, 15, 'asd', false] ;

console.log(countTruthy(arrayTruthy));



function countTruthy(arrayTruthy){
    let count = 0;
    for (let value of arrayTruthy)
    // console.log(value);
        if (value)
        count++;
        return count;
  


}