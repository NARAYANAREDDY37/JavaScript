let msg = 'Good Morning'

let findZeros = (str) => {
  let count = 0;
  for(let i=0; i<str.length-1; i++){
    let char = str.charAt(i);
    if(char === 'o' || char === 'O'){
    count++;
  };
 
  };
  return count;

};
console.log(`The no of zeros in string are: ${findZeros(msg)}`);

//reverse string of the given string

msg = 'Hi hello everyone'

let reverseString = (str) => {
  let tempString = ''
  for(i=str.length-1; i>=0; i--){
    let char = str.charAt(i);
    tempString += char;
  }
  return tempString;
};


console.log(`${msg} => ${reverseString(msg)}`);

//check the given string is palindrome or not

msg = 'ABABA'

let isPalindrome = (str) => {
  if(str === reverseString(str)){
    return true;
    
  }
  else{
    return false;
  }
};

console.log(`${msg} is palindrome? => ${isPalindrome(msg)}`);

//or
msg = 'ABAB'

isPalindrome = (str) => {
  return(str === reverseString(str));
};

console.log(`${msg} is palindrome? => ${isPalindrome(msg)}`);

//triangel example-1

msg = 'NARAYANA REDDY'

let triangelOne = (str) => {
  let tempstr = '';
  for(i=1; i<=str.length; i++){
    tempstr += `${str.substr(0,i)} \n`;
  }
  return tempstr;
};

console.log(`${triangelOne(msg)}`);

//triangel example-2
let addspace = (number) => {
  let tempspace = '';
  for (let i = 1; i <=number; i++) {
    tempspace += ' ';
  }
  return tempspace;
};

msg = 'NARAYANA REDDY'

let triangelTwo = (str) => {
  let tempstr = '';
  for(i=0; i<=str.length; i++){
    tempstr += `${addspace(i)} ${str.substr(i)} \n`;
  }
  return tempstr;
};

console.log(`${triangelTwo(msg)}`);

//triangel example-3
msg = 'NARAYANA REDDY'

let triangelThree = (str) => {
  let tempstr = '';
  for(i=str.length; i>=1; i--){
    tempstr += `${str.substr(0, i)} \n`;
  }
  return tempstr;
};

console.log(`${triangelThree(msg)}`);

//triangel example-4
let addspace4 = (number) => {
  let tempspace = '';
  for (let i = 1; i <=number; i++) {
    tempspace += ' ';
  }
  return tempspace;
};

msg = 'NARAYANA REDDY'

let triangelFour = (str) => {
  let tempstr = '';
  for(i=str.length-1; i >= 0; i--) {
    tempstr += `${addspace4(i)} ${str.substr(i)} \n`;
  }
  return tempstr;
};

console.log(`${triangelFour(msg)}`);


