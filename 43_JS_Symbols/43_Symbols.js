//symbols are used as the unique identifiers

//creating symbol
let symbol = Symbol('debug')
console.log(symbol);

let anotherSymbol = Symbol('debug')
console.log(anotherSymbol);

//you cannot have two symbols with one name
console.log(symbol == anotherSymbol);

//symbols in Objects

let obj = {
  name: 'Narayan',
  [symbol]: 37
}

//you cannot access the symbols in for loop. so you cannot change symbol. it acts as unique identifier 
for(key in obj) {
  console.log(key, ":", obj[key]);
}

//shared symbols
let symbol1 = Symbol.for('age')
let symbol2 = Symbol.for('age')
console.log(symbol1 == symbol2);

let pers = {
  name: 'leela',
  age: 27
}

let makeAge = () => {
  let symbol = Symbol.for('age');
  pers[symbol] = 25;
}

makeAge();
console.log(pers[symbol1]); //this is from function (25)
console.log(pers['age']); //this is form object (27)

//well known symbols in js
//symbol static properties present in object or Arrays

let numbers = [1, 2, 3]

numbers[Symbol.toPrimitive] = function(){
  return 99;
}

console.log(numbers + 1)