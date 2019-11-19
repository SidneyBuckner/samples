const myArr = [
  "Andrew",
  "Billy",
  "George",
  "Heather",
  "Madison",
  "Marque",
  "Martin",
  "Nikki",
  "Oscar",
  "RhondaLyn",
  "Sidney",
  "Tracie",
  "Wallat"
];

function nameMs(myArr) {
  const mNames = [];

  for (let i = 0; i < myArr.length; i += 1) {
    if (myArr[i].startsWith("M")) {
      mNames.push(myArr[i]);
    }
  }

  return mNames;
}

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);

//   return Math.floor(Math.random() * (max - min)) + min;
//   // The maximum is exclusive and the minimum is inclusive
// }

// console.log(myArr[getRandomInt(0, myArr.length - 1)]);
function initMeal(meal, entree) {
  return function() {
    return `${entree}! This is for ${meal}`;
  };
}
const beefDinner = initMeal("dinner", "beef");

console.log(beefDinner());
