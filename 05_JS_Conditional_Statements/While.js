wresult = ''

let i =0;
while(i<=20){

  if(i<20){
    wresult+= `${i}, `;
  }
  else{
    wresult+= `${i} `;
  }
  i+=2;
}
console.log(wresult);

//ex-1
wresult1 = ''
num =5
i =1;
while(i<=num){
  let j=1;
  while(j<=i){
    wresult1+= `* `;
    j++;
  }
  wresult1+='\n';
  i++;
}
console.log(wresult1);

//ex-2
wresult2 = ''

i =1;
while(i<=5){
  let j=1;
  while(j<=i){
    wresult2+= `${j} `;
    j++;
  }
  wresult2+='\n';
  i++;
}
console.log(wresult2);

//ex-3
wresult3 = ''

i =1;
while(i<=5){
  let j=1;
  while(j<=i){
    wresult3+= `${i} `;
    j++;
  }
  wresult3+='\n';
  i++;
}
console.log(wresult3);

//ex-4
wresult4 = ''

i =5;
while(i>=1){
  let j=1;
  while(j<=i){
    wresult4+= `${j} `;
    j++;
  }
  wresult4+='\n';
  i--;
}
console.log(wresult4);

//ex-5
wresult5 = ''

i =5;
while(i>=1){
  let j=1;
  while(j<=i){
    wresult5+= `${i} `;
    j++;
  }
  wresult5+='\n';
  i--;
}
console.log(wresult5);