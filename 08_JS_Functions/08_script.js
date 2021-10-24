/*
  1) Simple Functions ,
  2) args functions ,
  3) return values ,
  4) function expressions ,
  5) functions as arguments
  6) functions inside an object
  7) Nested Objects with functions ,
  8) default args
*/
//print the numbers using functions

function printNumbers(startNumber, endNumber, increment) {
  let result = "";
  for (let i = startNumber; i <= endNumber; i += increment) {
    result += `${i} `;
  }
  console.log(result);
}
printNumbers(50, 100, 5);
printNumbers(100, 150, 3);

//simple Functions

//function without parameters or Normal function or Isolated function
function greet() {
  console.log("Hello");
}
greet();

//or //function expression
let greetMe = function () {
  console.log("Hello");
};
greetMe();

//function with parameters

let greetings = function (name, age) {
  let messsage = `Hi ${name} you are ${age} years old`;
  console.log(messsage);
};
greetings("Narayana", 23);

//function with return type

let sum = function (a, b) {
  let result = 2 * (a + b);
  return result;
};
let output = sum(15, 20);
console.log(output);

//function with an object as parameter
let printObject = function (obj) {
  console.log(obj);
};

let mobile = {
  name: "apple",
  size: 10,
  color: "black",
};
printObject(mobile);

//function with an array as parameter
let printArray = function (array) {
  let result = "";
  for (let index in array) {
    result += `Index: ${index} => Value: ${array[index]} \n`;
  }

  console.log(result);
};

let numbers = [10, 20, 30, 40];
let color = ["white", "black", "red", "green", "yellow"];
printArray(numbers);
printArray(color);

//function inside an object

student = {
  name: "rakesh",
  age: 25,
  college: "VVIT",
  marks: function () {
    return "85/100";
  },
};
console.log(student.marks());

//nested function
let outerFn = function () {
  console.log("Iam an outer function");
  let innerFn = function () {
    console.log("Iam an inner function");
  };
  innerFn();
};
outerFn();

//twisted function
let twistedFn = function () {
  let name = "narayan reddy";
  let printStudent = function () {
    let student = {
      name: "narayana",
      age: 20,
      course: "EEE",
    };
    return student;
  };
  return printStudent;
};

let innerfn = twistedFn();
let studnetobj = innerfn();
console.log(studnetobj.name);

//chicken curry with functions

let glassBowl = function (rawChicken, masala) {
  //marinating the chicken
  let marinatedChicken = `Mixing of: ${rawChicken} and: ${masala}`;
  return marinatedChicken;
};

let cookingBowl = function (marinatedChicken, water) {
  //cooking the chicken
  let cookedChicken = `Mixing of: ${marinatedChicken} and: ${water}`;
  return cookedChicken;
};

let eatingPlate = function (cookedChicken, rice) {
  //eating logic
  let eating = `Eating of: ${cookedChicken} and: ${rice}`;
};

let rawChicken = "3kg chicken";
let masala = "garlic, pepper, daniya";
let marinatedChicken = glassBowl(rawChicken, masala);

let water = "1 Liter";
let cookedChicken = cookingBowl(marinatedChicken, water);

let rice = "1 kg";
eatingPlate(cookedChicken, rice);
