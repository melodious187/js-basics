
// Function Declaration
function walk(){
    console.log('walk');
}

// Function Expression
let run = function () {
    console.log('run');
};

const move = run;
run();
move();

    