const groceries = "I am a grocery list!";

function initObj(potatoes, cereal, anotherFruit) {
  return {
    potatoes,
    cereal,
    fruit: anotherFruit,
    getChecklist: () =>
      `Im going to the grocery store and really need ${this.cereal}`,
    anotherChecklist: function() {
      return `oh dear! I forgot to also get ${this.potatoes}`;
    },
    oneMoreChecklist: () =>
      `Last but not least, I need to pick up one ${fruit};`
  };
}
const myList = initObj("redskins", "froot loops", "bananas");

console.log(myList);
console.log(myList.getChecklist());
console.log(myList.anotherChecklist());

// Arrow Functions do not know how to use the Keyword 'this'!!! The Template Literal returns "Undefined" (eg. getChcklist) 'This' looks globally for the object!
// The function Declaration in ES6 will pick up the object using the Keyword 'this' ( eg. anotherChecklist)
// Just dont do the the third (oneMoreChecklist)

// { potatoes: 'redskins',
//   cereal: 'froot loops',
//   fruit: 'bananas',
//   getChecklist: [Function: getChecklist],
//   anotherChecklist: [Function: anotherChecklist],
//   oneMoreChecklist: [Function: oneMoreChecklist] }
// Im going to the grocery store and really need undefined
// oh dear! I forgot to also get redskins
