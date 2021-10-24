/* callback functions are also called Higher order functions. we will pass a callback function as a parmater to another function

In JavaScript functions are first class objects.

functions are first class citizens of javascript

javascript is a synchronous and single threaded language

callbacks allow us to perform asynchronous operations in javascript
*/

//simple example
let x = function(){
  console.log('Iam called from inside')
};

let y = function(callback){
  console.log('do something')
  callback();
};

y(x);

//another example (without using callback)
let calc = function(num1, num2, calcType){
  if(calcType === 'add'){
    return num1 + num2;
  }
  else if(calcType === 'multiply'){
    return num1 * num2;
  }
}
console.log(calc(2,3, 'add'));

//same example using callback
let add = function(num1, num2){
  return num1 + num2;
};

let multiply = function(num1, num2){
  return num1 * num2;
};

let calculate = function(num1, num2, callback){
  return callback(num1, num2);
};

let doWhatEver = function(num1, num2){
  console.log(`Here are your two numbers: ${num1} and ${num2}`)
}

console.log(calculate(7, 3, doWhatEver));
//or we can write function directly as an argument
//As this function has no name it is called anonymous function
console.log(calculate(4,9, function(a,b) {
  return a+b;
}));

//another example of callback function
setTimeout(() =>{
  console.log('This function was executed after 3 seconds');
}, 3000);

//akshay saini
setTimeout(() =>{
  console.log("timer 5 seconds")
},5000);

function a(b){
  console.log("A")
  b();
};

a(function b(){
  console.log("B")
});

//closures with Event listeners

let attachEventListener = function(){
  let count = 0;
  document.getElementById('clickMe')
  .addEventListener('click',() => {
    console.log('Button clicked', ++count);
  })
};

attachEventListener();
