// const s1 = "Hey";
// console.log(s1);
// console.log(typeof s1);

// const s2 = new String('Hello');
// console.log(s2);
// console.log(s2[0]);
// console.log(typeof s2);


// console.log(window);
// console.log(navigator.appVersion);


//Object Literal

const book1 = {
  title: 'Naa Istam',
  author: 'RGV',
  year: 2000,
  getSummary: function(){
    return `${this.title} was written by ${this.author} in ${this.year}`
  }
}
console.log(book1.getSummary());

//Get keys & values of object
console.log(Object.keys(book1));
console.log(Object.values(book1));