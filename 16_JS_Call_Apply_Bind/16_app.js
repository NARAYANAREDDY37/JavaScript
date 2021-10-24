//call is like borrowing functions, methods and using whereever we want 
let printFullName = function(hometown, state){
  console.log(this.firstName + ' ' + this.lastName + " from " + hometown + ", " + state);
};

let name1 = {
  firstName: 'Narayana',
  lastName: 'Reddy',
};

printFullName.call(name1, 'Guntur', "Andhra Pradesh");

//In apply method we pass arguments as array
printFullName.apply(name1, ['Guntur', "Andhra Pradesh"]);

let name2 = {
  firstName: 'Venkat',
  lastName: 'Reddy'
};
printFullName.call(name2, 'Hyderabad', 'Telangana');

//In apply method we pass arguments as array
printFullName.apply(name2, ['Hyderabad', 'Telangana']);

//Bind method (it is similar to call but it gives a copy of whole function which can invoke whenever you want)

let printMyName = printFullName.bind(name1,'Guntur', 'Andhra Pradesh')
console.log(printMyName); //copy of function
printMyName(); //invoking or calling function

