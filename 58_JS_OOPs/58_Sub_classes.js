class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  //method (all the methods you create will be under prototype methods)
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}


//Magazine subclass
class Magazine extends Book{

  constructor(title, author, year, publisher){
    super(title, author, year);
    this.publisher = publisher
  }
};

//Instantiate Magazine
const mag1 = new Magazine('Naa Istam', 'RGV', '2000', 'Comapny Publishers');
console.log(mag1);
console.log(mag1.getSummary());
