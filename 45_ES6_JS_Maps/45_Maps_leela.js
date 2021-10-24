let fruits = {
  name: 'Banana'
}

let vegetables = {
  name: 'Tomato'
}

let basket = new Map();
basket.set('fruits', fruits)
basket.set('veggies', vegetables)

console.log(basket.size)
console.log(basket.get('fruits'));

//looping in map object
for(let key of basket.keys()) {
  console.log(key);
}

for(let key of basket.values()) {
  console.log(key);
}

//if you want both key and value
for(let entry of basket.entries()) {
  console.log(entry);
}
//or
for(let entry of basket) {
  console.log(entry);
}

//Weak Map object (if we are not using any object after its defined, if they are assigned to weakmap then it removes from memory)

//WeakMap directly gives values, for loop can't be used in it

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
let fruit = {
  name: 'Banana'
}

let veg = {
  name: 'Tomato'
}

//unlike above we have not used strings(primitive types) to represent keys

//In WeakMap keys must be objects
let key1 = {a:1}
let key2 = {b:1}

basket = new WeakMap();
basket.set(key1, fruit)
basket.set(key2, veg)

console.log(basket.get(key1));