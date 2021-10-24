/* function addButton() {
  var a = document.getElementById("text-1").value;
  var b = document.getElementById("text-2").value;
  document.getElementById("show-result").innerHTML = "Result = " + (a + b);
} */


/* Web Dev simplified */

const users = [
  { name: "John", age: 23 },
  { name: "Kyle", age: 24 },
  { name: "Dean", age: 45 },
  { name: "Root", age: 35 },
  { name: "Chris", age: 20 },
  { name: "Alex", age: 32 }
];

users.forEach(user => {
  printUser(user)
})

function printUser(user) {
  console.log(`User ${user.name} will be ${user.age + 5} years old in 5 years`);
}