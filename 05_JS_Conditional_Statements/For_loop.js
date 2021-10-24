//for loop --------------------------

//for(initilization; condition; incre/decre){ //statements}

//basic for loop
for (let i = 0; i<=10; i++) {
  console.log(i);

}

// For loop Example to display from 1 - 10 values
let fresults ='';
for (let i = 0; i <=10; i++) {
 //fresults = fresults + i;
  if (i<=9){
    fresults+= `${i}, `;
  }
  else{
    fresults+= `${i} `;
  }
}
console.log(fresults);

//print the values form 20 - 0 with difference 2

let fresults20_0 = ''
for (let i = 20; i>=0; i-=2) {
  if (i>0){
    fresults20_0+= `${i}, `;
  }
  else{
    fresults20_0+= `${i} `;
  }
}
console.log(fresults20_0);

//nested for loops

nest_res ='';
let number =5;

for (let i=1; i<=number; i++) {
  for (let j=1; j<=i; j++) {
    nest_res+= `* `;
    
  }
  nest_res+='\n';
}
console.log(nest_res)

//ex-1
result_ex1 =''

for (let i=1; i<=5; i++) {
  for (let j=1; j<=i; j++) {
    result_ex1+= `${j}`;
    
  }
  result_ex1+='\n';
}
console.log(result_ex1)

//ex-2

result_ex2 =''

for (let i=1; i<=5; i++) {
  for (let j=1; j<=i; j++) {
    result_ex2+= `${i}`;
    
  }
  result_ex2+='\n';
}
console.log(result_ex2)

//ex-3

result_ex3 =''

for (let i=5; i>=1; i--) {
  for (let j=1; j<=i; j++) {
    result_ex3+= `${j}`;
    
  }
  result_ex3+='\n';
}
console.log(result_ex3)

//ex-4

result_ex4 =''

for (let i=5; i>=1; i--) {
  for (let j=1; j<=i; j++) {
    result_ex4+= `${i}`;
    
  }
  result_ex4+='\n';
}
console.log(result_ex4)