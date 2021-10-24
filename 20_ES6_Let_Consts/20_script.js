//var = ES5

//var vs let
//local scope = functional scope

/* if(true){
  var age = 30;
}

console.log(age);
 */
let age = 40; //globally declaring age
if(true){
  let age = 30;
  console.log(age); //30
}

console.log(age); (40) //reference error (age is not defined)

//let is available in only block scope (where ever you have defined, you must call in that place only)


//const
const name = 'narayan';
//name = 'George'; //type error ( we can't assign name two times)

//usually we define const variables with capital letters

const array = [1,2,3]
console.log(array);

array.push(4);
console.log(array);

//for reference types like array and objects we can manipulate variables, which defined with const

//ex- with object

const obj = {
  name: 'venkat'
}
console.log(obj);

obj.name = 'Bobby';
console.log(obj)