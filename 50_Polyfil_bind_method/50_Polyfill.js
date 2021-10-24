//polyfill for bind method (https://youtu.be/ke_y6z0xRpk)
/* polyfill is  sort of browser fallback */

//tradational bind function
let person = {
  firstName: 'George',
  lastName: 'Davidson'
};

let printFullName = function(hometown, state, country){
  console.log(this.firstName + ' ' + this.lastName + ', ' + hometown + ', ' + state + ', ' + country);
};

let printMyName = printFullName.bind(person);
printMyName('Hyderabad', 'Telangana', 'India');

//writing my own bind function
//Goal => Here we wanted to execute printFullName when printMyName2 is invoked

/* setting mybind to Function.prototype will give all the other functions access to mybind function

suppose you create any random function and you want to access mybind function just use dot operator ----> random.mybind();

*/
Function.prototype.mybind = function(...args) {
  let obj = this //accessing printFullName using this
  
  params = args.slice(1); //you dont need params when you pass all parameters in function as args2
  
  return function(...args2){
    obj.apply(args[0], [...params, ...args2]); 
    //0 means no arguments except person object as reference
  }
}

let printMyName2 = printFullName.mybind(person);
printMyName('Guntur', 'Andhra Pradesh', 'India');
