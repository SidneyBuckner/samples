// We went over function factories in class today. Now, you can create one that will return a function that will include a 'greeting' and a 'name.'

// Here's how I want to be able to use it:

function initGreeting(greeting, name) {
  return function() {
    return `${greeting} ${name}`;
  };
}
const eveningGeorge = initGreeting("Good Evening", "George");

console.log(eveningGeorge());
