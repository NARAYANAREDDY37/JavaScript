import{Person} from "../person/36_Person.js";

export class Employee extends Person {

  constructor(firstName, lastName, age, designation, height){
    super(firstName, lastName)
    this.age = age;
    this.designation = designation;
    this.height = height;
  }

  getAge(){ return this.age; }
  getDesignation(){ return this.designation;}
  getHeight(){ return this.height;}

  greet(){  //this greet methods overrides the existing parent class greet method
    let msg = `Hello Mr.${this.getFirstName()} ${this.getLastName()}. your age is ${this.getAge()} and your designation is ${this.getDesignation()} and your height is ${this.getHeight()}`
    console.log(msg);
  }
};

