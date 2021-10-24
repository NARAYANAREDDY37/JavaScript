//parent class 

class Person {
  constructor(firstName, lastName){
    
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  getFirstName() { return this.firstName; }
  getLastName() { return this.lastName; }

  greet(){
    let msg = `Hello Mr.${this.getFirstName()} ${this.getLastName()}`
    console.log(msg);
  };
};

let person = new Person('George', 'Davidson');
person.greet();

//child class
class Employee extends Person {

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
let employee = new Employee('Harley', 'Davidson', 25, 'Sr.Data Scientist', 6.5);
employee.greet();  // output of overridden greet method


//(Hello Mr.Harley Davidson. your age is 25 and your designation is Sr.Data Scientist)

//another child class

class Customer extends Employee {

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

let customer = new Customer('John', 'Calvin', 45, 'Germany', 7);
customer.greet();