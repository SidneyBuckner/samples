// Iterate over an ARRAY with WHILE and separate out the NUMBERS and STRINGS
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const strings = ["string", "hello", "goodbye"];

const numbersAndStrings = numbers.concat(strings);

const updatednumbersAndStrings = [];

const results = numbers.map(number => {
  return number + 1;
});

console.log(numbers);
console.log(results);

// IF YOU NEED A THIS  TO REFERENCE DO NOT USE THE ARROW SYNTAX!!!

// function updatedNumbersAndStrings(arr, stringUpdate, numberUpdate) {
//   const updatedNumbersAndStrings = [];

//   arr.forEach(el => {
//     if (typeof el === "string") {
//       updatedNumbersAndStrings.push((el += stringUpdate));
//     } else {
//       updatedNumbersAndStrings.push((el += numberUpdate));
//     }
//   });

//   return updatedNumbersAndStrings;
// }

// // console.log("numbers is", numbers);
// // console.log("strings is", strings);
// console.log(
//   updatedNumbersAndStrings(numbersAndStrings, " : this is a string", 236)
// );
