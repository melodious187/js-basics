//  Hoisting is moving the function declrations to the top
//  of the code at runtime


// Function Declaration

walk();
function walk(){
    console.log('walk');
}

// Function Expression

const run = function() {
    console.log('run');
};

run();