'use strict';
//Objects
//one of the JavaScript's data types.
//a collection of reated data and/or funcrionality
//Nearly all objects in JavaScript are instances of Object
//object = { key : value };

//오브젝트 만드는 법

//1. Literals and properties
const obj1 = {}; //괄호이용
const obj2 = new Object(); //new 키워드 이용

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = {name: 'ellie', age: 4};
print(ellie);


//2. Computed properties
// key should be always string
console.log(ellie.name); //. => 코딩하는 순간 그 키의 값을 가져올때
console.log(ellie['name']); // [''] 어떤 키가 필요한지 모를때
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

//3. Property value shorthand
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4}; //=> 계속 키와 값들을 입력해야한다

const person4 = new Person('ellie',20);  //함수를 이용해서 값만 전달
console.log(person4);
//4. Constructor function
function Person(name, age) {
  //this = name;
  this.name = name;
  this.age = age;
  // return this;  

}

//5. in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);

//6. for..in vs for..of
// for (key in obj)
console.clear();
for (let key in ellie) {
  console.log(key);
}

//for (value of iterable)
const array = [1, 2, 3, 4];
for (let value of array){
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, ...])
const user = { name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

//old way
const user3 = {};
for (let key in user){
  user3[key] = user[key];
}
console.clear();
console.log(user3);  //


const user4 = Object.assign({}, user);
console.log(user4);



















