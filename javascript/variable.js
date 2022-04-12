'use strict';

//variable
//let (added in ES6)
let globalName = 'global name';
{
let a = 'ellie';
console.log(a);
a = 'hello';
console.log(a);
console.log(globalName);
}
console.log(globalName);
console.log(a);