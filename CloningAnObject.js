
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// Method 1
// const another = {};
// for (let key in circle)
//     another[key] = circle[key];

// console.log(circle);

// Method 2
// const another = Object.assign({}, circle);

// Method 3, easiest 
const another = { ...circle};

console.log(another);
