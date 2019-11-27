class Person {
  constructor(first, last, age, occ) {
    this.first = first;
    this.last = last;
    this.age = age;
    this.occ = occ;
  }
  get FullName() {
    return `${this.first} ${this.last}`;
  }

  set newId(id) {
    this.id = id;
  }
}

const emp = new Person("Jinora", "Grimaldi", 30, "Artist");

emp.id = 123;
// console.log(emp.FullName);
// console.log(emp);

class Employee extends Person {
  constructor(first, last, age, occ) {
    super(first, last, age, occ);
    this.
  }

  get assignments({
    let = `Look at my current checklist:`;
  })
}

const employee = new Employee("Robert", "Johnson", 20, "tester", "1702957");

console.log(employee);
