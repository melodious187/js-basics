
let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');

//constructor function
function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

console.log('Are the two addresses equal? ' + areEqual(address1, address2));
console.log('Are the two addresses referencing the same memory location? ' + areSame(address1, address2));

function areEqual(address1, address2) {
    return address1.street === address2.street &&
        address1.city === address2.city &&
        address1.zipCode === address2.zipCode;
}

function areSame(address1, address2) {

    return address1 === address2;
}

// console.log("Are the two addresses equal: " + areEqual(address1, address2));
// console.log('Are the two addresses referencing the same memory location: ' + areSame(address1, address2))

// function areEqual(address1, address2){
    //     return address1.street === address2.street &&
    //         address1.city === address2.city && 
    //         address1.zipCode === address2.zipCode;
    // }
    
    // function areSame(address1, address2){
        //     return address1 === address2;
        // }