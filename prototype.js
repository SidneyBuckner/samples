function Profile(first, last, age, occ) {
  (this.first = first), (this.last = last), (this.age = age), (this.occ = occ);

  this.canDrink = function() {
    if (this.age < 21) {
      return "My favorite wine is French. French wine is the best wine.";
    }

    return "Just kidding, Cali wine is the best.";
  };

  // Profile.prototype.getHobby = function() {
  //   if (this.hobby === "Arts & Crafts") {
  //     return `My favorite hobby is ${this.hobby}`;
  //   }
  //   console.error("HOBBY NOT FOUND!!!");
  // };

  Profile.prototype.getFullName = function() {
    return `${this.first} ${this.last}`;
  };
  Profile.prototype.getBio = function() {
    return `hi, my name is ${this.getFullName()}. I am ${
      this.age
    } years old. ${this.canDrink()}`;
  };

  function Employee(first, last, age, occ, employId) {
    Person.call(this, first, last, age, occ);
    this.employId = employId;
  }

  //create an instance of the blueprint constructor
  const emp = new Employee("Tony", 34, "Gamer", "419760");

}
const me = new Profile("Sidney", "Buckner", 26, "Software Engineer");
const cara = new Profile("Cara", "Grimaldi," 28, "Doctor");
const gale = new Profile("Ashter", "Gale", 29, "Scientist");

them.getFullName = function() {
  return "No Thanks";
};

console.log(gale.getFullName());
console.log(cara.getBio());


// console.log(me.getFullName());
// console.log(me.getBio());

// me.setHobby("Arts and Crafts!");
// console.log(me);
