//Object of protos

const bookProtos = {
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },

  getAge: function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} was released ${years} years ago`;
  },
};

//create Object
// const book1 = Object.create(bookProtos);
// book1.title = "Camrade";
// book1.author = "Stalin";
// book1.year = "2021";

//Another method of creating object
const book1 = Object.create(bookProtos, {
  title: {value: "Camrade"},
  author: {value: "Stalin"},
  year: {value: "2021"}
});

console.log(book1);
