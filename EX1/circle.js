module.exports = class Circle {
  constructor( radius ) {
    this.radius = radius;
  }
  circumference() {
    return Math.PI * this.radius * 2;
  }
  area(){
    return Math.PI * Math.pow( this.radius, 2 );
  }
};