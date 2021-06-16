

// Factory Function
function createCircle(radius) {
    return  {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

const myCircle = createCircle(1);

// Construcor Function
function Circle(radius){
    this.redius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(1);