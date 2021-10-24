let empName = 'george'

//set
localStorage.setItem('name', empName);

//get
console.log(localStorage.getItem('name'));

//remove the key
localStorage.removeItem('name');

//clear
localStorage.clear();

//local storge with an array 

let colors = [
  {id:1, name: 'white'},
  {id:2, name: 'black'},
  {id:3, name: 'violet'},
  {id:4, name: 'blue'},
  {id:5, name: 'dark'},
]

//set colors
localStorage.setItem('colors', JSON.stringify(colors));

//fetching back to object
let theColors = JSON.parse(localStorage.getItem('colors'));
console.log(theColors);

localStorage.removeItem('colors');

//session storage with simple string
let studentName = 'alex'

sessionStorage.setItem('name', studentName);

//get
console.log(sessionStorage.getItem('name'));