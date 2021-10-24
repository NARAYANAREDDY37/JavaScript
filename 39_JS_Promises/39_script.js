//promise concept with call backs

let doTask = (success, failure) => {
	let isDone = true;
	if (isDone) {
		success('Task done successfully');
	} else {
		failure('Task failed!');
	}
};

doTask(
	(message) => {
		console.log(message);
	},
	(errMessage) => {
		console.log(errMessage);
	}
);

//actual promise creation

let cleanCamera = new Promise((resolve, reject) => {
	//cleaning camera
	let isDone = true;
	if (isDone) {
		resolve('Cleaning is Done');
	} else {
		reject('Cleaning is Not Done');
	}
});
cleanCamera
	.then((message) => {
		console.log(message);
	})
	.catch((err) => {
		console.error(err);
	});

//dependent promises in js

let buildProject = new Promise((resolve, reject) => {
	let isDone = true;
	if (isDone) {
		resolve('Project is Finished');
	} else {
		reject('Project is not Finished');
	}
});

let attendTechnicalRound = new Promise((resolve, reject) => {
	let isDone = true;
	if (isDone) {
		resolve('Technical Round is Finished');
	} else {
		reject('Technical Round is not Finished');
	}
});

let attendManagerRound = new Promise((resolve, reject) => {
	let isDone = true;
	if (isDone) {
		resolve('Manager Round is Finished');
	} else {
		reject('Manager Round is not Finished');
	}
});

let attendHRRound = new Promise((resolve, reject) => {
	let isDone = true;
	if (isDone) {
		resolve('HR Round is Finished and Got Job!!');
	} else {
		reject('HR Round is not Finished');
	}
});

buildProject
	.then((message) => {
		let result = `${message} --> `;
		attendTechnicalRound
			.then((message) => {
				result += `${message} --> `;
				attendManagerRound
					.then((message) => {
						result += `${message} --> `;
						attendHRRound
							.then((message) => {
								result += `${message}`;
								console.log(result);
							})
							.catch((err) => {
								console.log(err);
							});
					})
					.catch((err) => {
						console.log(err);
					});
			})
			.catch((err) => {
				console.log(err);
			});
	})
	.catch((err) => {
		console.log(err);
	});
