//function currying using bind method

let multiply = function (x, y) {
	console.log(x * y);
};

//this is similar to below function

/* let multiplyByTwo = function (y) {
	let x = 2; //setting x=2 permanently
	console.log(x * y);
}; */

let multiplyByTwo = multiply.bind(this, 2);
//this key word sets x=2 permanently like above function
multiplyByTwo(5); //y=5 and output is 10

//Note: if suppose 2, 12 pass chesthe, answer 24 vasthunddi. 5 ni ignore chesthunddi

let multiplyByFive = multiply.bind(this, 5);
//here this key word sets x=5
multiplyByFive(4); //y=4 and output is 20

//function currying using closures
let doMultiply = function (x) {
	return function (y) {
		console.log(x * y);
	};
};

let doMultiplyByTwo = doMultiply(2);
doMultiplyByTwo(4);

let doMultiplyByThree = doMultiply(3);
doMultiplyByThree(4);

// realtime example for currying, closure, partial application
let jsonPlaceholder = async (endpoint) => {
	let url = `http://jsonplaceholder.typicode.com/${endpoint}`;
	let resp = await fetch(url);
	let data = await resp.json();
	return (num) => {
		return data
			.slice(0, num)
			.map((item) => {
				let label = item.name || item.title;
				return `<p>${endpoint} :: ${label}</p>`;
			})
			.join('\n');
	};
};

const sleep = (milliseconds) => {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

async function init() {
	let posts = await jsonPlaceholder('posts');
	let users = await jsonPlaceholder('users');

	sleep(3000).then(() => {
		//after 3 seconds this runs
		console.log(posts(2));
		console.log(users(4));
	});
}
init();
