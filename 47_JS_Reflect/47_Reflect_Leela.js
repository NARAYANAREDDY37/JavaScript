/* Reflect is a built-in object

Reflect is not a function object, so it's not constructible.

All properties and methods of Reflect are static (just like the Math object)
 */


//creating an object using reflcet 
class Person {
  constructor(name){
    this.name = name;
  }
}
function sample(){

}
//reflcet takes 3 parameters (class or function, arguments, optional(prototype))
let person = Reflect.construct(Person, ['George']);
console.log(person);
console.log(person instanceof Person);
console.log(person.__proto__ === Person.prototype);

//changing the person prototype
person = Reflect.construct(Person, ['George'], sample);
console.log(person.__proto__ === Person.prototype); //false
console.log(person.__proto__ === sample.prototype); //true


//calling methods using Reflect.apply
class George {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  hello() {
    console.log('Hello My name is ' + this.name + 'and My age is ' + this.age);
  }
}

//creating an object using reflcet
let george = Reflect.construct(George, ['George ', 23]);
//(old way) let george2 = new George('John ', 45) 
let george2 = Reflect.construct(George, ['John ', 45]);

//calling hello method (traditional way)
george.hello();
//by using reflcet
Reflect.apply(george.hello, george, [])


//traditional way of attaching another object to method (either ways you can use (bind or call))
george.hello.bind(george2)();
george.hello.call(george2);
//by using reflcet
Reflect.apply(george.hello, george2, []) //empty array because hello method is not taking any arguments

//getting prototypes & managing prototypes
class Cat {
  constructor(){
    this.name = 'Poppy'
  }
}
let cat = new Cat();
console.log(cat.__proto__); //old way
console.log(Reflect.getPrototypeOf(cat));

console.log(Reflect.getPrototypeOf(cat) === Cat.prototype);

//setting up the prototype
let proto = {
  age: 30
}

Reflect.setPrototypeOf(cat, proto)
console.log(Reflect.getPrototypeOf(cat));
console.log(Reflect.getPrototypeOf(cat) === Cat.prototype);//false
console.log(Reflect.getPrototypeOf(cat) === proto); //true


//get and set properties of object using Reflect
class Ball{
  constructor(name, size){
    this.name = name;
    this.size = size;
  }

  get name(){
    return this._name;
  }

  set name(value){
    this._name = value;
  }
}

let user = {
  _name: 'Jim'
}

let ball = new Ball('Fairdeal', 20 );
console.log(ball);
console.log(Reflect.get(ball, 'name'));
console.log(Reflect.get(ball, 'size'));

//setting the properties
Reflect.set(ball, 'name', 'SuperDeal')
Reflect.set(ball, 'size', 30)
console.log(Reflect.get(ball, 'name'));
console.log(Reflect.get(ball, 'size'));

//calling and changing the user object name
console.log(Reflect.get(ball, 'name', user)); 

Reflect.set(ball, 'name', 'Kenny', user); //Jim
console.log(Reflect.get(ball, 'name', user)); //Kenny

console.log(Reflect.ownKeys(ball));

//creating and deleting the properties of object using reflect
class Dog{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
}

let dog = Reflect.construct(Dog, ['chintu', 7]);
console.log(dog);

//creating another property
Reflect.defineProperty(dog, 'color', {
  writable: true,
  value: 'white',
  configurable: true
})
console.log(Reflect.get(dog, 'color'));
console.log(Reflect.ownKeys(dog));

//setting the color to black
Reflect.set(dog, 'color', 'black');
console.log(Reflect.get(dog, 'color'));

//deleting the color property (to delete we need to add configurable = true)
//if you make it false, you will get your property back
//delete dog.color; //old way

Reflect.deleteProperty(dog, 'color')
console.log(Reflect.get(dog, 'color'));

//locking the object (to prevent from adding or deleting anythings)
//once you lock the object, you cannot perform any operation

class Cycle{
  constructor(name){
    this.name = name;
  }
}
let cycle = Reflect.construct(Cycle, ['BSE']);
console.log(Reflect.get(cycle, 'name'));

//checking if object allows me to manipulate (true)
console.log(Reflect.isExtensible(cycle));

//locking the object
Reflect.preventExtensions(cycle)

//checking if object allows me to manipulate (false)
console.log(Reflect.isExtensible(cycle));

//adding the property
Reflect.defineProperty(cycle, 'color', {
  writable: true,
  value: 'Pink',
  configurable: true
})

console.log(Reflect.get(cycle, 'color')); //undefined, since locked

