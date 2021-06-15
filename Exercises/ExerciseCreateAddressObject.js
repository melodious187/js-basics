
// Create an object with
// street
// city
// zipCode
// Create a function showAddress(address) that displays all
//      porperties of object and their value

const address = {
    street: 'West 34th Place',
    city: 'East San Jose',
    zipCode: 48596
};

function showAddress(address){
    for (let key in address)
        console.log(key, address[key]);
}

showAddress(address);


// const address = {
//     street: '24th Ave East',
//     city: 'Pueblo West',
//     zipCode: 81210
// };

// function showAddress(address) {
//     for (let key in address)
//         console.log(key, address[key]);
// }

// showAddress(address);

// const address = {
//     street: '24th Place',
//     city: 'San Jose',
//     zipCode: 82432
// }

// // function showAddress(street, city, zipCode){
// function showAddress(){
//     for (let key in address)
//         console.log(key, address[key] );
// }

// showAddress();