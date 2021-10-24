const posts = [
	{
		title: 'post one',
		body: 'This is post one',
	},
	{
		title: 'post two',
		body: 'This is post two',
	},
];

function getPosts() {
	setTimeout(() => {
		let output = '';
		posts.forEach((post) => (output += `<li>${post.title}</li>`));
		document.body.innerHTML = output;
	}, 1000);
}

//Create post
function createPost(post) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			posts.push(post);

			const error = false;

			if (!error) {
				resolve();
			} else {
				reject('Error: Something went wrong');
			}
		}, 2000);
	});
}

/* createPost({
	title: 'post three',
	body: 'This is post three',
})
	.then(getPosts)
	.catch((error) => console.log(error)); */

// Promise.all

/* const promise1 = Promise.resolve('Hello world');
console.log(promise1);
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
	setTimeout(resolve, 2000, 'Goodbye')
);
console.log(promise3);

const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(
	(res) => res.json()
);

Promise.all([promise1, promise2, promise3, promise4]).then((value) =>
	console.log(value)
); */

// Async / Await
async function init() {
	await createPost({
		title: 'post three',
		body: 'This is post three',
	});
	getPosts();
}

init();

//Async / Await using fetch
/* async function fetchUsers(){
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();

  console.log(data);
};

fetchUsers(); */
