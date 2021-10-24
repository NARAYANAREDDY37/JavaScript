class Obj1 {
  constructor(){
    this.name = "francis";
  }
}

class Obj2 {
  constructor(){
    this.age = 23;
  }
}

let obj1 = new Obj1();
let obj2 = new Obj2();

let object = Object.assign(obj1, obj2);
console.log(object)

console.log(obj1 instanceof Obj1);
console.log(obj2 instanceof Obj2);

//which you write first, for that object (Obj1) object will become instance
console.log(object instanceof Obj1);
console.log(object instanceof Obj2);

//it is also instance and prototype fo Obj1
console.log(object.__proto__ === Obj1.prototype);

//false
console.log(object.__proto__ === Obj2.prototype);


// 
var person = {
  //name: 'Kenny'
}

var boss = {
  name: 'Juile'
}

Object.setPrototypeOf(person, boss)
console.log(person.__proto__ === boss);

//when there is no name present in person. it will return name from boss object

//since we have set person prototype = boss
console.log(person.name)

//math object (sign, trunc, floor, ceil etc...)
let number = -3.67

console.log(Math.trunc(number));

//string object(StartsWith, endsWith, includes)

let string = 'Narayana'

console.log(string.startsWith('Na'));
console.log(string.includes('ana'));

//Number object (isNaN, isFinite, )
let num = NaN;

console.log(Number.isNaN(num));

