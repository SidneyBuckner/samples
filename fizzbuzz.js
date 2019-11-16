function fiizzBuzz(num) {
  for (let i = 0; i <= 99; i += 1) {
    if (i % 15 === 0) {
      console.log("Fizzbuzz!");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else {
      console.log(i);
    }
  }

  return fiizzBuzz(42);
}
// Write FizzBuzz
// Post different Solutions for Recursion in Slack
// /Write analogies for Pass by reference an pass by values
