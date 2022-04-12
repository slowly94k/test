//1. String concatenation

console.log('my' + ' cat');
console.log('1' +2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

//2.

for(let i = 0; i < 11; i++) {
  if(i % 2 !==0){
    console.log(`q1.${i}`);
  }
  
}

for(let i = 0; i < 11; i++) {
  if(i > 8){
    break;
  }
  console.log(`q2.${i}`);
}