/* 
The prototype is an object that is associated with every functions and objects by default in JavaScript, where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible

when you create an array, object ect.. 

the browser will automatically create prototype object which has different methods (like insert, remove etc..) and attaches it to what you have created. 

This is called prototype object

This can be seen by typing object.__proto__. (you will see a lot of methods that you can perform on this object)

*/

let array = ["narayana", "venkat"]

let object = {
  name: "george",
  city: "Hyderabad",
  getIntro: function () {
    console.log(this.name + "from " + this.city);
  }
}

let object2 = {
  name: "george "
}

//Never do this in real-time
//now object2 inherits from object

object2.__proto__ = object;

//if you do some console logs
console.log(object2.city); // Hyderabad (it inherits from object)

console.log(object2.getIntro()); //name will be taken form object2 only but city is inherited form object

//another example

Function.prototype.mybind = function(){
  console.log('mybind is accessed from external function');
};


//now you can create any function and access mybind easily
function random(){

}

function random2(){

}

console.log(random.mybind());
console.log(random2.mybind());