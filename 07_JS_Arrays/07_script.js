// creation of arrays
let count =[10,20,30];
console.log(count);
console.log(typeof count);

// Accessing an array and its properties
console.log(count[0]);

// Access not existed property from an array
console.log(count[5]);

//Iterating of array elements

let colors = ['white', 'black', 'red', 'green', 'orange', 'yellow'];

let cresults = '';
for(let i=0; i<=colors.length-1; i++){
  cresults += `${colors[i]} `;
  
}
console.log(cresults);

//for-in loops upto Es5
for(let i in colors){
  console.log(colors[i])
}
//or
fresults = ''
for(let index in colors){
  fresults += `${colors[index]} `;
}
console.log(fresults);

////for-of loops Es6
fresults1 = ''
for(let color of colors){
  fresults1 += `${color} `;
}
console.log(fresults1);

//for each function upto Es5

result =''
colors.forEach(function(color){
  result+= `${color} `;

});
console.log(result);

//for each with arrow function Es6
result =''
colors.forEach((color =>{
  result+= `${color} `;

}));
console.log(result);
//or
result =''
colors.forEach(color =>result+= `${color} `);
console.log(result);

//Array of objects
let employees = [
  {
    id: 1,
    name: 'John',
    age: 55,
    designation: 'sr.software developer',
    isactive: true
  },

  {
    id: 2,
    name: 'kelyl',
    age: 23,
    designation: 'sr.devops developer',
    isactive: true
  },

  {
    id: 3,
    name: 'meher',
    age: 22,
    designation: 'software developer',
    isactive: false
  },

  {
    id: 4,
    name: 'william',
    age: 34,
    designation: 'web developer',
    isactive: true
  },

  {
    id: 5,
    name: 'francis',
    age: 46,
    designation: 'sr.Data scientist',
    isactive: true
  }
];
console.log(employees)

console.log(employees[0].name)

//iterate the employees
result =''
for(let employee of employees){
 result+= `${employee.name} `;
}
console.log(result)

//filtering the employees based on age<40

let juniorEmployees =[];
for(employee of employees){
  if(employee.age < 40){
    juniorEmployees.push(employee);
  }
}
console.log(juniorEmployees);

//another example

let activeEmployees =[];
for(employee of employees){
  if(employee.isactive == true){
    activeEmployees.push(employee);
  }
}
console.log(activeEmployees);

//functions of arrays

console.log('-----------------shift function----------------')

let technologies = ['HTML', 'CSS', 'JSON', 'JavaScript','BootStrap'];
console.log(technologies);

technologies.shift(); //removes the first element
console.log(technologies);

console.log('-----------------unshift function----------------')
//unshift --- adds the first element
technologies.unshift('Node JS');
console.log(technologies);

console.log('-----------------push function----------------')
//unshift --- adds the last element
technologies.push('Angular');
console.log(technologies);

console.log('-----------------pop function----------------')
//unshift --- removes the last element
technologies.pop('Angular');
console.log(technologies);

console.log('-----------------sort function----------------')
//sort the array in ascending order
technologies = ['HTML', 'CSS', 'JSON', 'JavaScript','BootStrap'];
console.log(technologies);
technologies.sort();
console.log(technologies);

console.log('-----------------Reverse function----------------')
//reverse the array
technologies = ['HTML', 'CSS', 'JSON', 'JavaScript','BootStrap'];
console.log(technologies);
technologies.reverse();
console.log(technologies);

console.log('-----------------splice function----------------')
//splice(index, no.of elements)---removes elements based on index and no.of elements you specify
technologies = ['HTML', 'CSS', 'JSON', 'JavaScript','BootStrap'];
console.log(technologies);
technologies.splice(2,1); //removes JSON
console.log(technologies);

console.log('-------splice another property------------')
//splice(index, no.of elements, element you want to add)---replaces elements based on index and no.of elements you specify
technologies = ['HTML', 'CSS', 'JSON', 'JavaScript','BootStrap'];
console.log(technologies);
technologies.splice(4,1, 'ReactJS'); //Adds reactJs inplace of BootStrap
console.log(technologies);

console.log('---------------join()------------')
//join -- joins elements with given parameter
technologies = ['HTML', 'CSS', 'JSON', 'JavaScript','BootStrap'];
console.log(technologies);
let techstrings = technologies.join(' - ');
console.log(techstrings);

console.log('---------------split()------------')
//string is converted to array
console.log(techstrings);

let newtechstring = techstrings.split(' - ')
console.log(newtechstring);

console.log('---------------filter()------------')
//long code 
juniorEmployees =[];
for(employee of employees){
  if(employee.age < 40){
    juniorEmployees.push(employee);
  }
}
console.log(juniorEmployees);

//or by using simple filter function

let jrEmployees = employees.filter(employee => employee.age<40);
console.log(jrEmployees);


















// adding properties to an array


// Accessing length of an Array


// reverse the array using reverse()


// Remove the first value of the array: shift()


// Add value to front of the array:unshift()


// Remove the last value of the array: pop()


// Add value the end of the array: push()


// Remove an element from an Array , Arguments: colors.splice(pos,n):


// Create a copy of an array. Typically assigned to a new variable:slice();


// indexOf()


// join() , split()



// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
