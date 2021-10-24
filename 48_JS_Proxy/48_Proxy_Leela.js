/* 
The Proxy object enables you to create a proxy for another object

proxy is like a wrapper for the object 

proxy acts as a middle layer to get data from object when we are calling

 */

let person = {
  name: 'Clement'
};

let handler = {
  get: (obj, key) => {
    return key in obj ? obj[key] : 'Not found';
  }
}

let proxy = new Proxy(person, handler);
console.log(proxy.name);

//set the property of object using proxy 

/* let country = {
  name: 'England'
};
 */

//with class 
class Country {
  constructor(name){
    this.name = name;
  }
}
handler = {
  get: (obj, key) => {
    return key in obj ? obj[key] : 'Not found';
  },

  set: (obj, key, value) =>{
    if(value.length > 3){
      Reflect.set(obj, key, value);
    }
  }
}

//creating object for class
let country = new Country();

proxy = new Proxy(country, handler);

//setting name 
proxy.name = 'Australia'
console.log(proxy.name);

//setting up proxy for functions
function log(message) {
  console.log("The log message is: " + message);
}

handler = {
  apply: (fnName, thisArg, argList) =>{
    if(argList.length === 1){
      Reflect.apply(fnName, thisArg, argList);
    }
  }
}
proxy = new Proxy(log, handler)
proxy('You are logged in');

//revoking proxy (if you don't need any proxy)
let states = {
  name: 'Andhra pradesh'
};

let handle = {
  get: (obj, key) => {
    return Reflect.get(obj, key);
  }
}

let {state, revoke} = Proxy.revocable(states, handle);

revoke();

//console.log(state.name);
console.log(states.name);
