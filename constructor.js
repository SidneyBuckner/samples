function profile(first, last, age, occ) {
  (this.first = "Sidney"),
    (this.last = "Buckner"),
    (this.age = 26),
    (this.occ = "Software Engineer");

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
  this.getFullName;
}
