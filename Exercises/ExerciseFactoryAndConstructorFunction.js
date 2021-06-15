
// First write a Factory function
// 
//  Second write a Constructor Function

// Factory function
const address = {
    street: '148th Pl',
    city: 'Pueblo',
    zipCode: '28374'
}

showAddress(address);

function showAddress(street, city, zipCode){
    for (key in address) {
        console.log(key, address[key]);
    }
}
 

// Constructor Function

function ConstAddress(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let newAddress = new ConstAddress('184th Place', 'Weber', '29384');
console.log(newAddress);

// // Factory Fucntion
// let address = factoryAddress('1124th Ave', 'Pueblo', '81211');
// console.log(address);

// function factoryAddress(street, city, zipCode) {
//     return {
//         street,
//         city,
//         zipCode
//     };
// }

// // Constructor Function

// function ConstructorAddress(street, city, zipCode){
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode;
// }

// let constAddress = new ConstructorAddress('178th Ave E', 'Elbe', '19283');
// console.log(constAddress);