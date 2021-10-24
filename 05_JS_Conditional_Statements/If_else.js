// If Else condition Example
/* Note: In JavaScript 0, null = false, remaing all are true */
let marks = 0
result ='';

if (marks>=0 && marks<=34){
  result ='fail';
}
else if (marks==35){
  result ='Grace marks to be added'
}
else if (marks>35 && marks<=100){
  result ="pass";
}
else{
  result ='Enter proper marks'
}
console.log(result)


//switch statement example

let day= new Date().getDay();
let today=''
switch (day){
  case 0:
    today="sunday"
    break;

    case 1:
    today="monday"
    break;

    case 2:
    today="tuesday"
    break;

    case 3:
    today="wednesday"
    break;

    case 4:
    today="thursday"
    break;

    case 5:
    today="friday"
    break;

    case 6:
    today="saturday"
    break;

    default:
    today="Enter a proper day"
    break;
}
console.log(`today is:${today}`)

//another switch statement example
var Number = 3

switch(Number) {
  case 1:
    console.log("Number 1")
    break;

    case 2:
    console.log("Number 2")
    break;

    case 3:
    console.log("Number 3")
    break;
    
    default:
      console.log("nothing")
}
