var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit', addItem);

//item delete event
itemList.addEventListener('click', removeItem);

//Filter event
filter.addEventListener('keyup', filterItems);

//Add item
function addItem(e){
  e.preventDefault();


  //get input value
  var newItem = document.getElementById('item').value;

  //create new li element
  var li = document.createElement('li');

  //adding class to li
  li.className = 'list-group-item';

  //Adding text node for input value and adding it to li
  li.appendChild(document.createTextNode(newItem));

  //creating delete button element
  var deleteBtn = document.createElement('button');

  //adding classes to delete button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete'

  //adding text node to delete button
  deleteBtn.appendChild(document.createTextNode('X'));
  
  //appending delete button to li
  li.appendChild(deleteBtn);

  //adding li to list
  itemList.appendChild(li);

}

//removeItem
function removeItem(e) {
  if(e.target.classList.contains('delete')){
    if(confirm('Are you sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//FilterItem
function filterItems(e){
  //convert the typed input to lowercase
  var text = e.target.value.toLowerCase();

  //GET li's in the list (here we will get HTML Collection)
  var items = itemList.getElementsByTagName('li');

  //converting HTML collection of li items into array
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) !== -1){
      item.style.display = 'block';
    }
    else{
      item.style.display = 'none';
    }
  })
}