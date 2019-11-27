// // constructor function
// function Person(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
// }

// // Lets Create a Prototype function outside of the object that helps the instance instances maintain their unique properties!
// Person.prototype.whatIsName = function() {
//   if (typeof this.name === "string") {
//     return this.name;
//   }

//   return "PLEASE ENTER A NAME!!!";
// };

// Person.prototype.setHobbies = function(arr) {
//   this.hobbies = arr;
// };

// const hobbies = ["coding", "marching band", "video games"];

// // create an instance of the blueprint constructor
// const me = new Person("Sidney", 26, "Engineer");

// console.log(me);
// console.log(me.whatIsName());

// console.log(me.setHobbies());

// console.log(me);

// Conctructor
function Meals(bfast, lunch, dinner) {
  (this.bfast = bfast), (this.lunch = lunch), (this.dinner = dinner);
}
// Setter and instance
Meals.prototype.setFood = function(foodArr) {
  this.food = foodArr;
};

const delivery = new Meals("pancakes", "salad", "Tater Tots");
// Array
let junkFood = [
  "chips",
  "guac",
  "salsa",
  "popcorn",
  "pizza",
  "scrambled eggs",
  "waffles",
  "apple",
  "burrito",
  "banana",
  "pudding"
];

// Now we set the array?
delivery.setFood(junkFood);

Meals.prototype.mealList = function() {
  for (i = 0; i >= this.foodlength; i += 1) {
    console.log(this.food[i]);
  }
  console.log(delivery.mealList());
};
return delivery.mealList();
