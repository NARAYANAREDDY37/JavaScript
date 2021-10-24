//log, info, warn, error, table
// console= object , log=function
console.log("welcome to Js Basics")

console.info("I'm info")

console.warn("I'm warn")

console.error("I'm error")

let student ={
  name: "narayana",
  age: 13,
  course: "CSE"
};
console.table(student)

let btn1 = document.querySelector('#button1')
let btn2 = document.querySelector('#button2')
let fn = () => {
  console.log(this)
}
btn1.addEventListener("click",fn)

function fn2 () {
  console.log(this)
}
btn2.addEventListener("click",fn2)