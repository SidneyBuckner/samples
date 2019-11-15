// Use your skills to list out "All work and no play makes Jack a dull boy" a certain number of time
// Preferably your function DOES NOT use console.log
// instead it builds/contatonates a long string and return it! Then log in the global scope!

// function writePsychoBook(n) {
//   console.trace();
//   if (n === 0) {
//     return "I am done";
//   }

//   return `All work and no play makes Jack a dull boy ${writePsychoBook(n - 1)}`;
// }
// console.log(writePsychoBook(99));

// // The if statement n === 0 is the exit condition!

function myPow(num, exp) {
  let ret = num;

  for (let i = 1; i <= exp; i += 1) {
    ret += num;
  }

  return ret;
}
console.log(myPow(2, 3));
