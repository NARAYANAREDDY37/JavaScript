let numbers = [1, 2, 3];

let iterfn = numbers[Symbol.iterator]();

//background for of loop execution
console.log(iterfn.next());
console.log(iterfn.next());
console.log(iterfn.next());
console.log(iterfn.next());

let nums = [1, 2, 3];

nums[Symbol.iterator] = function () {
  let nextValue = 10;
  return {
    next: function () {
      nextValue++;
      return {
        done: nextValue > 15 ? true : false,
        value: nextValue,
      };
    },
  };
};
for (let value of nums) {
  console.log(value);
}

//generators
// (*) represents generator
//with generators we can easily create iterable objects
function* select() {
  yield 1; //return statements
  yield 2;
}
let it = select();
console.log(it.next());
console.log(it.next());
console.log(it.next());

//generating a iterable object using generators
function* gen() {
  yield "cooking";
  yield "Reading";
}

//customable iterators
let obj = {
  [Symbol.iterator]: gen,
};

for (let hobbie of obj) {
  console.log(hobbie);
}

//controlling the iterator with throw and return
function* num(end) {
  for (let i = 0; i < end; i++) {
    try {
      yield i;
    } catch (error) {
      console.log(error);
    }
  }
}
let value = num(3);

//when you use throw it will give error and iterator will execute from next line as it maintains state

//but when you use return iterator will stop iterating at that place
console.log(value.next());
console.log(value.throw("error occured but continues"));
console.log(value.return("return will stop execution"));
console.log(value.next());
