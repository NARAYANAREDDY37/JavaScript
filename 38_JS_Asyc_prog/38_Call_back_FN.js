//call back function
/* 
let sum = (a, b) => {
  return a + b;
}

let mul = (a, b) => {
  return a * b;
}

let calculate = (a, b, callback) => {
  let result = ''
  return callback(a,b); //callback = sum
};

let output = calculate(10,20, sum);
console.log(output);

output = calculate(10,20, mul);
console.log(output);

output = calculate(10,20, (a, b) => {  //you can directly write a function here
  return a-b;
});
console.log(output); */

let employees = [{id:1, name: 'Narayana', age: 28},
                {id:2, name: 'Venkat', age: 28},
                {id:3, name: 'Amar', age: 28},];
              
let createEmployee = (employee, callback) => {
  setTimeout(() =>{
    employees.push(employee);
    callback();
  }, 3000);
};

let getEmployees = () => {
  setTimeout(() =>{
    let employeeRows = '';
    employees.forEach(employee => {
      employeeRows +=`<tr>
                        <td>${employee.id}</td> 
                        <td>${employee.name}</td> 
                        <td>${employee.age}</td> 
                      </tr>`;
    });
    document.querySelector('#table-body').innerHTML = employeeRows;
  }, 1000);
  
};

createEmployee({id:4, name:'bhaskar', age:30}, getEmployees);


