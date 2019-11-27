// Iterate over an ARRAY with WHILE and separate out the NUMBERS and STRINGS
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const strings = ["string", "hello", "goodbye"];

const numbersAndStrings = numbers.concat(strings);

const updatednumbersAndStrings = [];
// if the element is a string, then concatonate "Hello, I am a string" to the end
// If it is a number add 236
// Generate a new array  generate with these new elements

for (let i = 0; i < numbersAndStrings.length; i += 1) {
  if (typeof numbersAndStrings[i] === "string") {
    updatednumbersAndStrings.push(
      (numbersAndStrings[i] += " :this is a string")
    );
  } else {
    updatednumbersAndStrings.push((numbersAndStrings[i] += 236));
  }
}

// console.log("numbers is", numbers);
// console.log("strings is", strings);
console.log(updatednumbersAndStrings);
