// // doMath is expecting to recieve a function
// function doMath(x, y, operation) {
//   // Name doesnt matter as long as the operation matches with parameter passed in at the console
//   // The function will recieve x and y
//   console.trace();

//   return operation(x, y);
// }
// function add(x, y) {
//   console.trace();

//   return x + y;
// }

// function subtract(x, y) {
//   console.trace();

//   return x - y;
// }
// console.log(doMath(10, 5, add));
// console.log(doMath(45, 13, subtract));

function initSportScorer(pts) {
  return function(score) {
    return score + pts;
  };
}

const threePointer = initSportScorer(3);

console.log(threePointer(99));

/**
 * function(score){
 * return score + 3;
 * }
 */
