const Circle = require('./circle.js');
const circle = new Circle( 5 );
console.log( `Circle with a radius of ${circle.radius} has a circumference of ${circle.circumference()}.` );
console.log( `It has an area of ${circle.area()}.` );