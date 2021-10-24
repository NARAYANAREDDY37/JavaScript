//Array Methods (fill, find)

//old fashion
let numbers = [1,2,3,4]
console.log(numbers);

//copy of array and doing some functionality
let newNumbers = Array.from(numbers, (value) => value * 2)
console.log(newNumbers);

//new way 
let nums = Array.of(5, 10, 3);
console.log(nums);

//array of objects
let array = [
  {name: 'apples', quantity:15},
  {name: 'oranges', quantity:20},
  {name: 'grapes', quantity:45}
]

let findOranges = (fruit) => {
  return fruit.name === 'oranges';
}
console.log(array.find(findOranges)) 