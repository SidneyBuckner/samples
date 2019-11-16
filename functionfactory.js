function initPerson(fname, lname, age) {
  return {
    fname,
    lname,
    age,
    canDrink: function() {
      return age >= 21;
    }
  };
}
const me = initPerson("Sidney", "Buckner", 26);

console.log(me.canDrink());
// Function Factories can also return objects/methods etc.
// Build additional Functionality in Function Factories

// We can also add shorthand for ES2015
