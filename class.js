class Person {
  constructor(first, last, age, occ) {
    this.first = first;
    this.last = last;
    this, (age = age);
    this.occ = occ;
  }

  get bio() {
    return `Hi, my name is ${this.fullName}. I am ${this.age}, and I am a ${this.occ}`;
  }

  get fullName() {
    return `${this.first} ${this.last}`;
  }
}
const me = new Person("John", "Smith", 35, "Gamer");

console.log(me.bio);

//

//
