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
  console.log("the expoenent is: ", exp);

  if (exp === 0) {
    return 1;
  }

  return (num *= myPow(num, exp - 1));
}
console.log(myPow(3, 4));
