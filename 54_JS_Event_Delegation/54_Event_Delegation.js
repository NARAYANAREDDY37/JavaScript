/* Event Delegation is a technique of handling events in our web page in a better way

Event Delegation is based on Event Bubbling.

Ultimately, what we are doing here is, instead of adding event listeners to each and every child element. we would wrap all these child elements into a single parent element and then add event listeners to it.

so that, the parent element take cares (or) listens to the events happening to child elements

 */

/* document.querySelector('#category').addEventListener('click',(e) => {
  console.log(e.target.id);
  if(e.target.tagName == 'LI'){
    window.location.href = "/" + e.target.id;
  }
}); */

//ex-2

document.querySelector('#form').addEventListener('keyup', (e) => {
  console.log(e);
  if(e.target.dataset.uppercase != undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});

