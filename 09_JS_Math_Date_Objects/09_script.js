/* ------------------------------------------------------------------
                            Math Object Examples
 -------------------------------------------------------------------- */

// Math PI

// Math sqrt
let sqrt = Math.sqrt(522);
console.log(sqrt);
// find the min of 4 numbers
let minimum = Math.min(2,13,15,4,86,95,44,66,258,56)
console.log(minimum);
// find the Max of 4 numbers

// find the 'x' to the power of 'y' value, ex: 2^4

// generate the random numbers from 0 to 100
let randomNumber = Math.random() *100
console.log(randomNumber);

/* For more details about Math Object, please have a look at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/* ------------------------------------------------------------------
                            Date Object Examples
 -------------------------------------------------------------------- */

// get today's date
let today = new Date();
console.log(today);

// Get proper date
let currentDate = new Date().toLocaleDateString();
console.log(currentDate);

//USA date
let options = {timeZone: 'America/Los_Angeles'};

let USADate = new Date().toLocaleDateString('en-US', options);
console.log(USADate);

// Get proper time
let currentTime = new Date().toLocaleTimeString();
console.log(currentTime);


// Get USA time
options = { timeZone: 'America/Los_Angeles' };

let USATime = new Date().toLocaleTimeString('en-US', options);
console.log(USATime);



// get full day of the week using switch statement

// Display a Digital Clock on the web page


/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

/* ------------------------------------------------------------------
                            Number Object Examples
 -------------------------------------------------------------------- */
console.log(Number.MAX_SAFE_INTEGER) //max Number
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)

//parseInt
let str1 = '100.2356';
let num1 = Number.parseInt(str1);
console.log(`${typeof str1} => ${typeof num1}`);
console.log(num1);  //removes decimals after point

//parseFloat
let str2 = '100.5465';
let num2 = Number.parseFloat(str2);
console.log(`${typeof str2} => ${typeof num2}`);
console.log(num2);

//to string--- converts to string
//to fixed -- adds decimal points to integer

/* ------------------------------------------------------------------
                            String Object Examples
 -------------------------------------------------------------------- */
// .length, .toLowerCase, .toUpperCase 

//substr(start index, no of char)
let msg = String('Good Morning')
console.log(msg.substr(0, 4)) //good
console.log(msg.substr(5, 7)) //morning
console.log(msg.substr(5)) //morning

//charAt, charCodeAt, 

//JSON objects

/*
sting => object = parse()
object => string = stringify
*/

// object => string = stringify

let student ={
    name: 'narayana',
    age:20,
    course: 'EEE'
  };

  console.log(student);

  let studentstr = JSON.stringify(student);
  console.log(studentstr);

//sting => object = parse()

let newstudent = JSON.parse(studentstr);
console.log(newstudent);