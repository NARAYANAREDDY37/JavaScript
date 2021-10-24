//for of used in arrays
let numbers = [1,2,3,4]
for(let number of numbers){
  console.log(number);
}

//for in used in objects
let student ={
  name:'narayana reddy',
  age:18,
  course:'B.tech',
  address:{
    street: 'Mines street',
    city: 'Macherala',
    state:'AP'
  }
};

for(let prop in student){
  console.log(prop, student[prop])
}