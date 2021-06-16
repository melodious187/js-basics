
// Apply the Rest Operator (...) to include all args passed
// Use reduce to calculate the total amount of purchases,
// Mmultiply the total by the doscount to acheive the final cost
function sum(dicsount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total* (1 -dicsount);

}

console.log(sum(0.1, 20, 30, 1));
