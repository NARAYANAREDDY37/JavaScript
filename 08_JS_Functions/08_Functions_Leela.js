function marriage(){
  console.log("happy married life")
}
marriage();
console.log(marriage);
console.log(typeof marriage);

//function assigned to another function
let anotherFn = marriage;
anotherFn();

console.log(typeof anotherFn);

//passing arguments to function
let add = function(number1, number2){
  let sum = number1 + number2;
  return sum;
}

/* let result = add(1, 2);
console.log(result); */

//another way
let result = add;

//here result will become function
console.log(typeof result); 
console.log(result(3, 7));

