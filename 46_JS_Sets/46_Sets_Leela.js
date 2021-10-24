//sets are like arrays but it will not allow duplicate values
//it stores only values

let set = new Set([1,2,3])

set.add(5);

for(let value of set){
  console.log(value);
}

//WeakSet (same like WeakMap, we can't loop over and values must be represented in objects)

//Weakset or WeakMap are both used to increase the performance. cuz it handles garbage collection
set = new WeakSet([{a:1}, {b:2}, {c:3}])

set.add({d:4})

console.log(set);

//
let obj1 = {a:1}
let obj2 = {b:1}
set1 = new WeakSet([obj1, obj2, obj2])

set1.add({d:4})

//you will not get error cuz for objects we have created variables
console.log(set1.has(obj2));
