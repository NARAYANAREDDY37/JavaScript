//promises mostly used while you are making AJAX calls like fetching data

let promise = new Promise((resolve, reject) => {
  isData = true;
  if(isData){
    setTimeout(() =>{
      resolve('Data transfer Done!')
    },2000)
  }
  else{
    reject('Error occured')
  }
  
})

promise.then((message) => {
  console.log(message)
}).catch((err) => {
  console.log(err)
})

console.log("Please Wait....");

//chaining of promises
//if you want to make multiple asynchronous calls to perform one by one you write multiple promises
let waitAsecond = (seconds) => {
  return new Promise((resolve, reject) => {
    if(seconds > 2){
      reject('Rejected')
    }
    else{
      setTimeout(() =>{
        seconds++;
        resolve(seconds)
      },1000)
    }     
  })
}
waitAsecond(1)
.then(waitAsecond)
.then(waitAsecond)
.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
})

//All and Race in promises
let promise1 = new Promise((resolve, reject) => {
    
  setTimeout(() =>{
    resolve('Resolved!')
    },1000)
})

let promise2 = new Promise((resolve, reject) => {
    
  setTimeout(() =>{
    reject('Rejected!')
    },2000)
})

Promise.all([promise1, promise2]).then((message) => {
  console.log(message)
}).catch((err) => {
  console.log(err)
})

//if you use "all" it will execute if all promises are resolved otherwise it will throw error

//if you use "race" it will execute which promise has less time