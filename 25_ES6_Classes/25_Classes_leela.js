class Car {
  constructor(){ 
    this.name ='Lalu'
  }
  //method
  hello(){ 
    console.log(`hello world, this is ${this.name} and my age is ${this.age}`);
  }
}
let car = new Car();
car.hello();

console.log(car.__proto__ === Car.prototype);


//class inheritance

class David extends Car {
  constructor(age){ 
    super('george');
    this.age = age;
  }
}
let david = new David(23);
david.hello();

//static methods in js
class Helper {
  getMessage(message){
    console.log(message)
  }
}
let helper = new Helper();
helper.getMessage('hai')

//without creating an object for class
class Mover {
  static getMessage(message){
    console.log(message)
  }
}
//directly calling the class method with Class name
Mover.getMessage('Hello Bro')

//Getters and setters 
class Register {
  constructor(name){
    this._name = name
  }

  get name(){ 
    return this._name.toUpperCase();
  }
  set name(value){

    if(value.length > 2){
      this._name = value;
    }
    else{
      console.log("Not saved")
    }
  }
}
let register = new Register("george")
console.log(register.name);

register.name = "yo"
console.log(register.name);

//Extend built in objects like arrays, objects to custom Classes

class ExtendableArray extends Array{
  multiplyBy2(){ 
    let returnArray = [];
    this.forEach(value => returnArray.push(value * 2));
    return returnArray;
  }
}
let array = new ExtendableArray();

array.push(1);
array.push(2);
array.push(3);

console.log(array.multiplyBy2());
