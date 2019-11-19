function initFizzBuzz(num1, num2) {
  return function fizzBuzz46() {
    for (let i = 0; i <= 200; i += 1) {
      if (i % (num1 * num2) === 0) {
        console.log("FIZZBUZZ!");
      } else if (i % num1 === 0) {
        console.log("Fizz!");
      } else if (i % num2 === 0) {
        console.log("Buzz!");
      } else {
        console.log(i);
      }
    }

    return initFizzBuzz();
  };
}
const fizzBuzz46 = initFizzBuzz(4, 6);

fizzBuzz46();
// Write FizzBuzz
// Post different Solutions for Recursion in Slack
// /Write analogies for Pass by reference an pass by values
