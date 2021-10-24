import {Employee} from "../employee/36_Employee.js";

export class Customer extends Employee {

  constructor(firstName, lastName,age,location,height){
    super(firstName, lastName, age, location,height);
    this.location = location;
  
  }
  
  getLocation() { return this.location;}

  greet(){  //this greet methods overrides the existing parent class greet method
    let msg = `Hello Mr.${this.getFirstName()} ${this.getLastName()}. your age is ${this.getAge()} and your location is ${this.getLocation()} and your heigh${this.getHeight()}`
    console.log(msg);
  }
};

