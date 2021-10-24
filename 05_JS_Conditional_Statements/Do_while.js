let d =0;
let dresult ='';


do{
  if(d<=9){
    dresult +=`${d}, `;
  }
  else{
    dresult +=`${d} `;

  }
  d++;
}
while(d<=10);
console.log(dresult);