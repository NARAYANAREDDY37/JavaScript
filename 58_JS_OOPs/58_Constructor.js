//Constructor
function Book(title, author, year){
  this.title = title;
  this.author = author;
  this.year = year;
  
  this.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`
  };
}

/* The use of the constructor is, here we have defined our parameters only once in constructor and we can make use of them by creating any no of objects. 

But in object literals we write different object for every book.
 */


//Instantiate an object
const book1 = new Book('Naa Istam', 'RGV', '2000');
const book2 = new Book('Bible', 'Prophets', '2 B.C');

console.log(book2.getSummary());