/* Event Bubbling and Capturing are two ways of event propagation in the DOM tree

Event capturing is also called as Trickling
----> Bubbling = upwards (events propagation)
----> Capturing or Trickling = downwards (events propagation)

By default Event Bubbling (down to up) is used if you don't pass the third argument inside the addEventListener function (i,e false by default)

If you specify true, then the Trickling or Capturing occures (Up to down)

 */

/* document.querySelector('#grand-parent').addEventListener('click', () => {
  console.log('GrandParent is clicked!');
}, true);

document.querySelector('#parent').addEventListener('click', () => {
  console.log('Parent is clicked!');
}, true);

document.querySelector('#child').addEventListener('click', () => {
  console.log('Child is clicked!');
}, true); */

//stoping the event propagation

/* It is a bad thing, that all events were propagated when only child event is 
clicked. 

so we have to avoid it by stoping other events when one event is clicked 

*/

document.querySelector('#grand-parent').addEventListener(
	'click',
	() => {
		console.log('GrandParent is clicked!');
	},
	false
);

document.querySelector('#parent').addEventListener(
	'click',
	(e) => {
		console.log('Parent is clicked!');
		e.stopPropagation();
	},
	false
);

document.querySelector('#child').addEventListener(
	'click',
	() => {
		console.log('Child is clicked!');
	},
	false
);

//now, when you click on child, only child and parent will be called because we have stopped event propagation after parent. No grandParent will be appeared.
