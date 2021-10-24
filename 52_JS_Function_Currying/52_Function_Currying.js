//function currying using bind method

let multiply = function (x, y){
  console.log(x * y);
};

//this is similar to below function

/* let multiplyByTwo = function (y){
  let x = 2; //setting x=2 permanently
  console.log(x * y);
} */

let multiplyByTwo = multiply.bind(this, 2);
//this key word sets x=2 permanently like above function
multiplyByTwo(5); //y=5 and output is 10

let multiplyByFive = multiply.bind(this,5);
//here this key word sets x=5
multiplyByFive(4); //y=4 and output is 20


//function currying using closures
let doMultiply = function(x){
  return function(y){
    console.log(x * y);
  }
}

let doMultiplyByTwo = doMultiply(2);
doMultiplyByTwo(4);

let doMultiplyByThree = doMultiply(3);
doMultiplyByThree(4);