//rest operator

let add = (array) => {
  let result = 0
  for(let i = 0; i < array.length; i++) {
    result += array[i]
  }
  return result;
}
console.log(add([10,20,30]))

// 
function add1(array) {
  let result = 0;
  for(let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}
console.log(add1(20,30,50));

//
let sum = (...array) => {
  let result = 0
  for(let i = 0; i < array.length; i++) {
    result += array[i]
  }
  return result;
}
console.log(sum(10,20,30,50))

//spread operator
let numbers = [1,2,3,4,5]
console.log(Math.max(1,2,3,4,5))
console.log(Math.max(...numbers));

//spread operator in objects
let obj = {
  name: 'dave',
  age: 30,
  gender: 'male'
}
let obj1 = {
  name: 'John',
  age: 25,
  gender: 'male',
  hobbies: ['cricket']
}

console.log({...obj, ...obj1})