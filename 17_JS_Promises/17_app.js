let promiseToCleanTheRoom = new Promise((resolve, reject) =>{

  let isClean = false;

  if(isClean){
    resolve('Clean')
  }
  else {
    reject('not clean');
  }
});

//clean = fromReslove
//not clean = fromReject
promiseToCleanTheRoom.then((fromReslove) =>{
  console.log('The room is ' + fromReslove);
}).catch((fromReject) =>{
  console.log('The room is ' + fromReject);
})

let cleanRoom = () => {
  return new Promise((resolve, reject) =>{
    resolve ('Cleaned the room');
  });
};

let removeGarbage = () => {
  return new Promise((resolve, reject) =>{
    resolve ('removed the room');
  });
};

let winIcecream = () => {
  return new Promise((resolve, reject) =>{
    resolve ('won icecream');
  });
};

cleanRoom().then((result) =>{
  return removeGarbage();
}).then((result) =>{
  return winIcecream();
}).then((result) =>{
  console.log('yahoo!! work finished.' + result);
});