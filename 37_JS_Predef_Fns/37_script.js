//setInterval
let count = ''
let interval = 0;
let greet = () => {
  count++;
  console.log(`Welcome to predefined!: ${count}`);
  console.log(new Date().toLocaleTimeString());
};
interval = setInterval(greet, 1000);

console.log(new Date().toLocaleTimeString());
setTimeout(() => {
  clearInterval(interval);
}, 3000);