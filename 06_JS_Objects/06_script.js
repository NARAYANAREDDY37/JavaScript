/*
  * 1) Object Creation
  * 2) Adding and Deleting props
  * 3) Retrieval
  * 4) Object Literal
  * 5) dot , [] notation
  * 6) Nested Objects
*/
//object Creation
let car={
  brand: 'Rollsroyce',
  type: 'Diesel',
  color: 'Black',
  mfg:2021
};
console.log(car);
//access the properties of object
console.log(car.brand);

//access the non-existing properties of object
console.log(car.country);

//access the properties using dot, [] notation
console.log(car.color);
console.log(car['color']);

//accessing the dynamic properties using dot, [] notation
let prop ='mfg'
console.log(car.prop); //undefined

console.log(car[prop]); //you can access dynamic properties only by using [] notation

//Nested Objects

let student ={
  name:'narayana reddy',
  age:18,
  course:'B.tech',
  address:{
    street: 'Mines street',
    city: 'Macherala',
    state:'AP'
  }
};
//accessing the nested object
console.log(student.address);
console.log(student.address.city);

//CURD operations

//create properties
let mobile = {};

mobile.brand ='Apple'
mobile.color ='Black'
mobile.size = 6.5
mobile.IsInsured = true;

console.log(mobile);

//reading the properties
console.log(mobile.brand); //Apple

//deleting
delete mobile.IsInsured;
console.log(mobile);

//updating the properties

mobile.display ='Amlod';
console.log(mobile);

mobile.display =' LCD Full HD+';
console.log(mobile);

//new of defining the object
let name1 = "narayana"
let age = 23

let obj = {
  name1,
  age
}
console.log(obj);
