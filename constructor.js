function Profile(first, last, age, occ) {
  (this.first = first), (this.last = last), (this.age = age), (this.occ = occ);

  this.canDrink = function() {
    if (this.age < 21) {
      return "My favorite wine is French. French wine is the best wine.";
    }

    return "Just kidding, Cali wine is the best.";
  };

  this.getBio = function() {
    return `hi, my name is ${this.getFullName()}. I am ${
      this.age
    } years old. ${this.canDrink()}`;
  };
  this.getFullName = function() {
    return `${this.first} ${this.last}`;
  };
}
const me = new Profile("Sidney", "Buckner", 26, "Software Engineer");

console.log(me);
console.log(me.getBio());
console.log(me.getFullName());
