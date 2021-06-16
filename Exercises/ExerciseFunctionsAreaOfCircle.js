
// circle.radius = 2;
// console.log(circle(x));

const circle = {
    radius: 1,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
}

console.log(circle.radius, circle.area);










// const circle = {
//     radius: 12,
//     get area(){
//         return Math.PI * this.radius * this.radius;
//     }
// };

// console.log(circle.area);
