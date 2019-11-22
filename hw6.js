// constructor function
function Person(name, age, job) {
  (this.name = name), (this.age = age), (this.job = job);
}

//Lets Create a Prototype function outside of the object that helps the instance instances maintain their unique properties!
Person.prototype.whatIsName(){
  if (typeof this.name === "string") {
    return this.name;
  }
  return "PLEASE ENTER A NAME!!!"
}

Person.prototype.hobbies(arr){
  this.hobbies = arr;
}

const hobbies = ["coding", "marching band", "video games"];

//create an instance of the blueprint constructor
const me = new Person("Sidney", 26, "Engineer")
console.log(me);
me.whatIsName();
me.addHobbies(hobbies[0]);
console.log(me);
