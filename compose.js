const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function add1(n) {
  return n + 1;
}

function double(n) {
  return n * 2;
}

function add1AndDouble(n) {
  return double(add1(n));
}

function doubleAndAdd1(n) {
  return add1(double(n));
}

// TODO: Add 1 and Double each num inside of nums
// const numsAddedOneAndDoubled = nums.map(num => add1AndDouble(num));

console.log(nums.map(num => add1(num)).map(num => double(num)));

// TODO: Add 1 and double each num inside of the nums only using the first 2 functions
const results = nums
  .filter(num => num % 2 === 1)
  .map(num => add1(num))
  .map(num => double(num));

console.log(results);
