let numbers = [1,2];

//destrcturing 
let [a, b] = numbers;

/* let a = numbers[0]
let b = numbers[1] */

console.log(a,b);

//destructuring in swaping
a = 1;
b = 2;

[b,a] = [a,b];
console.log(a,b);

//destructuring objects
let object = {
  name1: 'kuku',
  age: 34,
  hello: () => {
    console.log('how are you');
  }
};

//let {name1, age, hello} = object;

//if you want to store hello with another variable
let {name1, age, hello:Welcome} = object;
console.log(name1, age);
Welcome();
