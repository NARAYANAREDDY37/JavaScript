import{Person} from "./person/36_Person.js";
import {Employee} from "./employee/36_Employee.js";
import{Customer} from "./customer/36_Customer.js";

let employee = new Employee('Harley', 'Davidson', 25, 'Sr.Data Scientist', 6.5);
employee.greet();

let customer = new Customer('John', 'Calvin', 45, 'Germany', 7);
customer.greet();

let person = new Person('George', 'Davidson');
person.greet();