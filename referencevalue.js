// Pass by reference and pass by value

let x = 3;
// y references its ownccopy of the number 3
let y = x;

function add(n) {
  return n + 1;
}

// Pass by value - Primitives cannot be mutated and passed by value
// in the heap the prmitive cannot be changed when reassigned
// you have to creative a whole new value to change

x = add1(x);
console.log("x after  add1 is", x);
console.log(y);

// if I get a new tesla and my friend get a new tesla, they are two copies for the same type of tesla. If I get mine detailed and my friend doesnt is how to describe pass by value
