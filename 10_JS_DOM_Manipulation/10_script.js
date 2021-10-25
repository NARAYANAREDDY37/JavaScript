//document
console.log(document);

//head
console.log(document.head);

//title
console.log(document.title);

//body
console.log(document.body);

//nav tag
let navtag = document.querySelector('nav');
console.log(navtag);

//anchor tag
let anchortag = document.querySelector('nav a');
console.log(anchortag);

//Inner text in anchor tag
let text = anchortag.innerText;
console.log(text);

//changing the inner text
//anchortag.innerText = 'Narayana Reddy'

//accessing the h1 tag

let h1Tag = document.querySelector('#msg');
console.log(h1Tag);

//change text
h1Tag.innerText = 'Hi Everybody!!';

//styles

h1Tag.style.backgroundColor = 'teal';
h1Tag.style.color = 'white';
h1Tag.style.fontFamily = 'comic Sans';
h1Tag.style.padding = '25px';
h1Tag.style.textAlign = 'center';
h1Tag.style.boxShadow = '0 0 10px black';

/* Telsuko JavaScript */

//getElementById
function buttonClick() {
	document.getElementById('heading').innerHTML = 'You have changed the text';
}

//taking input form user
function fn1() {
	var username = document.getElementById('text-1').value;
	var password = document.getElementById('password-1').value;
	if (username == password) {
		alert('username and password are same');
	} else {
		alert('username and password are not same');
	}
}

//getElementByTagName
function changeStyle() {
	var para = document.getElementsByTagName('p');
	para[0].style.fontSize = 50;
	para[1].style.color = 'red';
	para[2].style.fontWeight = 'bold';
	para[3].style.fontStyle = 'italic';
}
