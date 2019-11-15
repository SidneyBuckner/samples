// Use your skills to list out "All work and no play makes Jack a dull boy" a certain number of time
// Preferably your function DOES NOT use console.log
// instead it builds/contatonates a long string and return it! Then log in the global scope!

function writePsychoBook(num) {
  let paragraph = "";

  for (let i = 0; i <= num; i += 1) {
    paragraph += "All work and no play makes Jack a dull boy. ";
  }

  return paragraph;
}
console.log(writePsychoBook(99));
