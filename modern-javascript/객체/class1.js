function Ellipse(a, b) {
    this.a = a;
    this.b = b;
}

Ellipse.prototype.getArea = function() {
    return Math.PI * this.a * this.b;
}

Ellipse.prototype.toString = function() {
    return "Ellipse " + this.a + " " + this.b;
}

function Circle(r) {
    this.a = r;
    this.b = r;
}

Circle.prototype = Object.create(Ellipse.prototype, {
    constructor : {
        configurable: true,
        enumerable: true,
        value: Circle,
        writable: true
    }
});

Circle.prototype.toString = function() {
    return "Circle " + this.a + " " + this.b;
}

// var ellipse = new Ellipse(3, 5);
// console.log(ellipse.getArea());
// console.log(ellipse.toString());

var circle = new Circle(2);
console.log(circle.getArea())