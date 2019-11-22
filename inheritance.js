// // Heres my constructor - If I want to create a new Constructor called Foo I also want to have a new and a price also
// function Product(name, price) {
//   this.name = name;
//   this.price = price;
// }
// // when I make an instance of food its going to have name and price
// // This special method call(),  product is called and passed along, inherits the ability/traits through parents
// function Food(name, price) {
//   Product.call(this, name, price);
//   this.category = "food";
// }
// // heres the instance below;
// const wunch = new Food("pizza", "6.00");

// console.log(wunch.price);

function Inventory(item, quantity) {
  (this.item = item), (this.quantity = quantity);
}

function Store(item, quantity) {
  Inventory.call(this, item, quantity, price);
  this.price = price;
}

const marketPlace = new Store("banana", 32, "0.99");
console.log(marketPlace);
