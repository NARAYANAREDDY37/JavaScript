//object creation in functional oriented programming

//  let mobile= {
//    brand: 'Apple',
//    color: 'black',
//    price: 50000,
//  }

//  console.log(mobile);

//object creation in object oriented programming

class Mobile {
  constructor(brand, color, price) {
    //takes the parameters
    this.brand = brand; //initializing the parameters
    this.color = color;
    this.price = price;
  }

  getBrand() {
    return this.brand; //accessing the parameters
  }

  setBrand(brand) {
    return (this.brand = brand);
  }

  getColor() {
    return this.color;
  }
  setColor(color) {
    return (this.color = color);
  }

  getPrice() {
    return this.price;
  }

  setPrice(price) {
    return (this.price = price);
  }

  printSpecifications() {
    //instance method
    let spec = `Brand:${this.getBrand()}
                Color:${this.getColor()}
                Price:${this.getPrice()}`;

    console.log(spec);
  }
}

let mobile = new Mobile("Appel", "Black", 50000); //creating object with 'new'
mobile.printSpecifications();

mobile.setPrice(45000);
mobile.printSpecifications();
