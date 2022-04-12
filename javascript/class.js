'use strict';
//Object-oriendted programming
//class: template
//object: instance of a class
//JavaScript classes
//- introduced in ES6
//- syntactical sugar over prototype-based inheritance

//1. Class declarations
class Person{
  //constructor
  constructor(name, age){
//fields
this.name = name;
this.age = age;
  }
  //methods
  speak() { 
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person('ellie',20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

//2.Getter and Setter
class User {
  constructor(firstname, lastName, age) {
    this.firstname = firstname;
    this.lastName = lastName;
    this.age = age;
  }
  get age(){
      return this._age;
  }
  set age(value){
    // if(value < 0){
    //   throw Error('age can not be negative');
    // }    
      this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'job', -1);
console.log(user1.age);


//5. inheritance
// away for ine class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw(){
    console.log(`drawing ${this.color} color of`);
  }

  getArea(){
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  getArea(){
    return this.width * this.height / 2;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


//6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
