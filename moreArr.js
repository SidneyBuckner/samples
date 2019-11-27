// Iterate over an ARRAY with WHILE and separate out the NUMBERS and STRINGS
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const strings = ["string", "hello", "goodbye"];

const numbersAndStrings = numbers.concat(strings);

const updatednumbersAndStrings = [];

numbers.forEach(function(number) {
  console.log("the number is: ", number);
});

strings.forEach(function(string) {
  console.log("the string is: ", string);
});

function updatedNumbersAndStrings(arr, stringUpdate, numberUpdate) {
  const updatedNumbersAndStrings = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] === "string") {
      updatedNumbersAndStrings.push((arr[i] += stringUpdate));
    } else {
      updatedNumbersAndStrings.push((arr[i] += numberUpdate));
    }
  }

  return updatedNumbersAndStrings;
}

// console.log("numbers is", numbers);
// console.log("strings is", strings);
// console.log(
//   updatedNumbersAndStrings(numbersAndStrings, " : this is a string", 236)
// );
