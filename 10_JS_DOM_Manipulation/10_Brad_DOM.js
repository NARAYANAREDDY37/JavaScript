/* Examine the Document object  */

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[17]);
// document.all[17].textContent = 'Hello';
// document.all[17].innerText = 'Goodbye';
// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

//HTML collection and array are different. you cannot perform array operations on HTML collection

/* selectors */
//GET_ELEMENT_BY_ID

// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);

// headerTitle.textContent = 'whatsapp';
// headerTitle.innerText = 'HeyHey';
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// innerText pays attention to styling

// console.log(headerTitle.innerHTML);
// headerTitle.innerHTML = "<h3>what!!</h3>"
// header.style.borderBottom = '3px solid blue'

//GET_ELEMENTS_BY_CLASS_NAME
// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[0].style.color = "red";
// items[1].style.backgroundColor = "#f4f4f4";
// items[2].style.fontWeight = "bold";
// items[3].style.backgroundColor = "yellow";

//Gives error
//items.style.backgroundColor = "#f4f4f4";

// for(var i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "#f4f4f4";
// }

//GET_ELEMENTS_BY_TAG_NAME
// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[0].style.color = "red";
// li[1].style.backgroundColor = "#f4f4f4";
// li[2].style.fontWeight = "bold";
// li[3].style.backgroundColor = "yellow";

//Gives error
//items.style.backgroundColor = "#f4f4f4";

// for(var i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "#f4f4f4";
// }li

//querySelectors
// var header = document.querySelector("#main-header");
// header.style.borderBottom = "3px solid green";

// var input = document.querySelector("input");
// input.value = "Hello World";

// var button = document.querySelector('input[type="submit"]');
// button.value = "SEND";

//it will be only applied to first item
// var item = document.querySelector('.list-group-item');
// item.style.color = 'red'

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue'

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.color = 'green'

//QuerySelectorAll
// var titles = document.querySelectorAll('.title');
// console.log(titles);

// titles[0].textContent = 'Magic'

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(var i=0; i<odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
// }

// var even = document.querySelectorAll('li:nth-child(even)');
// for(var i=0; i<even.length; i++){
//   even[i].style.backgroundColor = '#ccc';
// }

/* -------------------------------------------------------------------------------------------------- */

//Traversing the DOM (part-2)
// var itemList = document.querySelector("#items");
//parentNode
// console.log(itemList.parentNode); //main

// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode); //container
// console.log(itemList.parentNode.parentNode.parentNode); //body

//parentElement (same as parentNode, both are equal)
// console.log(itemList.parentElement); //main

// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement); //container
// console.log(itemList.parentElement.parentElement.parentElement); //body

//childNodes (don't use this, it will give spaces also)
// console.log(itemList.childNodes);

//children (this is better to use)
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// firstChild (gives space i,e as text)
// console.log(itemList.firstChild);

//firstElementChild (useful)
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.style.color = "red";
// itemList.firstElementChild.textContent = 'hello 1';

//lastChild (gives space i,e as text)
// console.log(itemList.lastChild);

//lastElementChild (useful)
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.style.color = "brown";
// itemList.lastElementChild.textContent = 'hello 4';

//nextSibling
// console.log(itemList.nextSibling);
//nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);
//previousElementSibling
// console.log(itemList.previousElementSibling);

//createElement

//create div
// var newDiv = document.createElement('div');

//Adding class
// newDiv.className = 'hello';

//Adding id
// newDiv.id = 'greet';

//Add attribute
// newDiv.setAttribute('title', 'hello-div');

//create textnode
// var newDivText = document.createTextNode('Hello World');

//Appending text to div
// newDiv.appendChild(newDivText);
// console.log(newDiv);

//inserting div into our DOM
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// container.insertBefore(newDiv, h1);
// console.log(newDiv);

// newDiv.style.fontSize = '30px';

/* ------------------------------------------------------------------------------------------------------------- */

//DOM Manipulation (Events) (part -3)
// var button = document
//   .getElementById("button")
//   .addEventListener("click", buttonClick);

//function buttonClick(e) {
// console.log(e);
// console.log(e.target);
// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.classList);

// var output = document.getElementById('output');
// output.innerHTML = '<h3>'+e.target.id+'</h3>'
// console.log(e.type);

//mouse positions from window
// console.log(e.clientX);
// console.log(e.clientY);

//mouse positions from actual element
// console.log(e.offsetX);
// console.log(e.offsetY);

// console.log(e.altKey);
// console.log(e.ctrlKey);
// console.log(e.shiftKey);
//}

var button = document.getElementById('button');
var box = document.getElementById('box');

//button.addEventListener("click", runEvent);
//button.addEventListener("dblclick", runEvent);
//button.addEventListener("mousedown", runEvent);
//button.addEventListener("mouseup", runEvent);

//box.addEventListener("mouseenter", runEvent);
//box.addEventListener("mouseleave", runEvent);

//These both works for innerHTML also
//box.addEventListener("mouseover", runEvent);
//box.addEventListener("mouseout", runEvent);

//box.addEventListener("mousemove", runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

//itemInput.addEventListener("keydown", runEvent);
//itemInput.addEventListener("keyup", runEvent);
//itemInput.addEventListener("keypress", runEvent);

// itemInput.addEventListener("focus", runEvent);
// itemInput.addEventListener("blur", runEvent);

// itemInput.addEventListener("cut", runEvent);
// itemInput.addEventListener("paste", runEvent);

// itemInput.addEventListener("input", runEvent);

//select.addEventListener('change', runEvent);
//select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);

function runEvent(e) {
	e.preventDefault();
	console.log('Event Type: ' + e.type);

	//   output.innerHTML =
	//     "<h3>MouseX: " + e.offsetX + "<h3>MouseY: " + e.offsetY + "</h3></h3>";

	//box.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)";
	//document.body.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)";

	//console.log(e.target.value);
	//document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>'
}
