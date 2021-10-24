let a = 10;
{
  let b = 30;

}
// console.log(b); ---cannot access the child element outside

/* All the code is executed through callstack

lexical environments is created when an execution context is created 
lexical environment = local memory + reference to lexical environment parent
 */
//scope chain (https://youtu.be/uH-tVP8MUs8)

function x(){
  var y = 10;
  
  function z(){
    function f(){
      console.log(y)
    }
    f();
  }
  z();
}
x();

//closures (akshay saini)
/* 
closure is a function that bind or bundled together with its lexical environment (or) scope

closure = function + lexical environment (lexical scope)

when you return a function it carries its lexical scope and you can you use whereever you want
*/

function p (){
  var c = 37;
  function q(){
    console.log(c);
  }
  return q;
}

var D = p();
console.log(D); //returns function q

/* suppose you have 1000 lines of code and now you want to call D. It still maintains the lexical scope */

D(); //37

//setTimeOut with closure

function n(){
  for(var i=1; i<=5; i++) {
    function close(x){
      setTimeout(() =>{
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
  console.log('Namste JavaScript');
}
n(); //if you use let you don't need close function, you can directly setTimeout in for loop

function outer(){
  var u =10;
  function inner(){
    console.log(u)
  }
  return inner; //or you could just call inner(); and call outer outside
}

outer()();





