//ES6 Classes (same thing as we did in constructor, it is easy to do with ES6 classes)
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

  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} was released ${years} years ago`;
  }

  revise(newYear) {
    this.year = newYear;
    this.revise = true;
  }

  static topBookStores() {
    return 'George Bros'
  }
}

//Instantiate an object
// const book1 = new Book("Naa Istam", "RGV", "2000");

// console.log(book1);
// book1.revise('2021');
// console.log(book1);

//when you use static you can call that method with that object class
console.log(Book.topBookStores());
