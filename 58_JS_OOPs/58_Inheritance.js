//Constructor
function Book(title, author, year){
  this.title = title;
  this.author = author;
  this.year = year;
}

//writing getSummary function as prototype method
Book.prototype.getSummary = function(){
  return `${this.title} was written by ${this.author} in ${this.year}`
}

//Magazine constructor
function Magazine(title, author, year, publisher){
  Book.call(this, title, author, year, publisher);

  this.publisher = publisher;
}

//Inherit prototype (to use getSummary method)
Magazine.prototype = Object.create(Book.prototype);

//Instantiate the Magazine object
const mag1 = new Magazine('The Pandemic', 'George', '2020', 'Sky Publishers');

//use Magazine constructor
Magazine.prototype.constructor = Magazine

console.log(mag1);
console.log(mag1.getSummary());