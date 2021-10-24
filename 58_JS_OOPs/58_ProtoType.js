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

//creating another prototype method
Book.prototype.getAge = function(){
  const years = new Date().getFullYear() - this.year;
  return `${this.title} was released ${years} years ago`
}

//another prototype (Revise / change year)
Book.prototype.revise = function(newYear){
  this.year = newYear;
  this.revise = true;
}

//Instantiate an object
const book1 = new Book('Naa Istam', 'RGV', '2000');
const book2 = new Book('Bible', 'Prophets', '2');

// console.log(book2);
// console.log(book2.getSummary());

// console.log(book1.getAge());

console.log(book1);
book1.revise('2021');
console.log(book1);