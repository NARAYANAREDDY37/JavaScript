/*
onabort: null
onafterprint: null
onanimationend: null
onanimationiteration: null
onanimationstart: null
onappinstalled: null
onauxclick: null
onbeforeinstallprompt: null
onbeforeprint: null
onbeforeunload: null
onblur: null
oncancel: null
oncanplay: null
oncanplaythrough: null
onchange: null
onclick: null
onclose: null
oncontextmenu: null
oncuechange: null
ondblclick: null
ondevicemotion: null
ondeviceorientation: null
ondeviceorientationabsolute: null
ondrag: null
ondragend: null
ondragenter: null
ondragleave: null
ondragover: null
ondragstart: null
ondrop: null
ondurationchange: null
onemptied: null
onended: null
onerror: null
onfocus: null
onformdata: null
ongotpointercapture: null
onhashchange: null
oninput: null
oninvalid: null
onkeydown: null
onkeypress: null
onkeyup: null
onlanguagechange: null
onload: null
onloadeddata: null
onloadedmetadata: null
onloadstart: null
onlostpointercapture: null
onmessage: null
onmessageerror: null
onmousedown: null
onmouseenter: null
onmouseleave: null
onmousemove: null
onmouseout: null
onmouseover: null
onmouseup: null
onmousewheel: null
onoffline: null
ononline: null
onpagehide: null
onpageshow: null
onpause: null
onplay: null
onplaying: null
onpointercancel: null
onpointerdown: null
onpointerenter: null
onpointerleave: null
onpointermove: null
onpointerout: null
onpointerover: null
onpointerrawupdate: null
onpointerup: null
onpopstate: null
onprogress: null
onratechange: null
onrejectionhandled: null
onreset: null
onresize: null
onscroll: null
onsearch: null
onseeked: null
onseeking: null
onselect: null
onselectionchange: null
onselectstart: null
onstalled: null
onstorage: null
onsubmit: null
onsuspend: null
ontimeupdate: null
ontoggle: null
ontransitioncancel: null
ontransitionend: null
ontransitionrun: null
ontransitionstart: null
onunhandledrejection: null
onunload: null
onvolumechange: null
onwaiting: null
onwebkitanimationend: null
onwebkitanimationiteration: null
onwebkitanimationstart: null
onwebkittransitionend: null
onwheel: null
*/

let sayGreetings = (message, bgColor) => {
  let h1Tag = document.querySelector('#msg-1');
  h1Tag.innerText = message;
  h1Tag.style.color = 'white';
  h1Tag.style.backgroundColor = bgColor;
  h1Tag.style.fontSize = '55px';
  h1Tag.style.boxShadow = '0 0 10px black';
  h1Tag.style.padding = '15px';
};

//good morning button 
let gmButton = document.querySelector('#gm-btn');
gmButton.addEventListener('click', function(){
  sayGreetings('Good Morning', 'green');
});

//good afternoon button 
let gaButton = document.querySelector('#ga-btn');
gaButton.addEventListener('click', function(){
  sayGreetings('Good Afternoon', 'red');
});

//good Evening button 
let geButton = document.querySelector('#ge-btn');
geButton.addEventListener('click', function(){
  sayGreetings('Good Evening', 'coral');
});

//good Night button 
let gnButton = document.querySelector('#gn-btn');
gnButton.addEventListener('click', function(){
  sayGreetings('Good Night', 'black');
});