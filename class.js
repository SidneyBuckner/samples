class Person {
  constructor(first, last, age, occ) {
    this.first = first;
    this.last = last;
    this.age = age;
    this.occ = occ;
  }

  get bio() {
    return `Hi, my name is ${this.fullName}. I am ${this.age}, and I am a ${this.occ}`;
  }

  get fullName() {
    return `${this.first} ${this.last}`;
  }
  // Setter is set the same way as a getter
  // The name of the setter MUST BE DIFFERENT from the name of the property!!!
  set activity(hobby) {
    this.hobby = this.hobby;
  }
}
const me = new Person("John", "Smith", 35, "Gamer");

// We'll invoke the setter with a snytac that is similar to changing property
console.log(me.bio);
console.log((me.hobby = "reading listerature"));
console.log(me.bio);
