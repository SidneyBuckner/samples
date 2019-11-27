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
console.log((me.hobby = "reading literature"));
console.log(me.bio);

// Now we'll inherit the constructor to make another class
// the extends give access to another class ,
// super automatically send a call for the information is needs to send down to the new class
// weve extended employee to be like Person

class Employee extends Person() {
  constructor(first, last, age, occ) {
    super(first, last, age, occ);
    this.id = empId;
  }
}

const emp = new Employee("Robert", "Johnson", 20, "tester", "1702957");

console.log(emp);
console.log(emp.bio);
