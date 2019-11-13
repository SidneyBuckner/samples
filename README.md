# JavaScript

[MDN Web Docs](https://developer.mozilla.org/en-US/)
[JavaScript Fundamentals](https://javascript.info/first-steps)
[Intro to JavaScript - Savvy Coders](https://savvy-coders.gitbook.io/course-materials/11)
[Notion – The all-in-one workspace for your notes, tasks, wikis, and databases.](https://www.notion.so/SavvyCoders-3a86e3eb7b204816b65cdd8dad624acb)

### Oct 31 - Primitive Data Types

- Strings
  - "dowpinrkg", "Sidney", "Meatloaf"
  - Identifies a set of characters

- Undefined
  - Nothing, told it to be nothing at all
  - A value that sits where there is no value
  - Undefined is always a result of javascript, never deliberately assign

- Null
  - Blank
  - Null must be explicitly assigned, deliberately nothing

- Integers or Numbers
  - Numbers
  - Ex: 2, 1000000, -345

- Boolean
  - Makes something True or False

### Operators

- `%` Modulous
  - Finds the remainer of a operation
- `/` Division
  - Divide Operation

- `+` Addition
  - Addition Operation
- `=` Assignment Operator
  - Assigns a value to something
- `==` Slightly Equal Operator
  ```
  2 == '2';
  true
  ```
- `===` Strictly Equal Operator
  ```
  2 ==='2';
  false
  ```

### Variables - A Place in Memory Allocated for a Value

- Expression
  - Anything that evaluates to some value

- "=" - Assignment Operator
  - It takes whatever is on the right side and assigns it to the left
```
let js = "javascript";
```
- Expression
  - Anything that evaluates to some value


- `let`- The fluid variable:
  - To create a variable in JavaScript, use the let keyword.
  - `let message = 'Hello, world';`
  - This String is now allocated in memory and can be recalled with the name `message`!


- `const` - Constants:
  - Constants cannot be reassigned. An attempt to do so would cause an error
  - Camel Case is better to use when you have multiple names in the constant
  - `thisIsCamelCase`


- Object Oriented Programming
  - References everything as an object. Tangible with qualities
  - Constructed with Keys and Values in pairs
  - Think of it as a bigger box than a `const` and `let`

- Arrays
  - An object with number, value pairs
  - obtain the value by referring to the index of the value
  - Indexes always start with 0
```
let classes = ["PE", "Math", "Biology"];
"PE" Is a 0 index
"Math" Is a 1 index
"Biology" Is a 2 index
```

- Objects can hold constants, functions, variable, arrays...
  - collections of data but we can access them by name/reference instead of by sequence like arrays

```
let hello = {}
typeof hello
  "object"

  now lets add the key value pair:

hello = {
  "name" : "Sidney B",
  "birthday" : "August"
}
```

- `console`
  - An Object itself (you can see an example of it in the devtools console)
```
console
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

```

 - `console.log();`
    - you can pass anything into the console, but remember, this does not return anything, or produces values
    - This just show you values for the purpose of debugging!

```
console.log("Hello, world!");
```

- Insert into Objects with dot notation;
```
const person = {};
person.name = 'sidney';
console.log('person.name');
  "sidney"

```
---

### Nov 4 - Introductions: Whats the Purpose of This Course?

#### *To Establish an understanding of basic Single Page Applications with Lessons in HTML CSS JavaScript ES6 and basic functionalities in rendering and processing functionalities from the back end to the front end*


### Shell Commands
```
`pwd` - *Print Working Directory/folder 📁*
`mkdir` - *Make Directory/folder 📁*
`cd` - *Change Directory/folder 📁*
`ls` - *List*
`touch` - Create a new file
`ls -al` - *List* all the things, including 'hidden'. *Hint:* `.` in front of a file name indicates a hidden file.
`clear`
`cd` - *Change Directory* back to 'Home'
`cd ..` - *Change Directory* up 1 directory
`mv` - Move/rename files
`cat` - View file contents directly in the terminal.
`history`

```

### Git Repo Commands

```
`git init` - initializing your code to be ready for commiting and pushing

`git add .` - adding all changes youve made to multiple files in your directory

`git status` - Shows the commit status of all your recently saved files. Red for non-committed, Green for commited

`git commit -m"INSERT MESSAGE HERE"` - commits your recently saved code. The -m represents the message you write to timestamp the progress/status of your code.

`git checkout Master` - This command helps you transfer between braches of commited code in your repository. Inster the Branch name after 'git checkout'

`git push origin master` - Pushes your code to GitHub, specifically this command send your code to the repo's Master Branch
```
---
### Nov 5 - How Programming Works

- Javascript is a programming language that sits on a complier. Eventually this translates to machine language.
  - A dynamically typed program
  - Our jobs as programmers are to articulate a seires of these simple functions in order to create a complex functioning program

- Extensibility
  - JS had a massive rewrite by EchmaScript in 2015
  - Expressed how JavaScript should be written

- Modularity
  - Import and Export

- JSON - JavaScript Object Notation
  - Notation or formatting that happens to look similar to JS Obejcts

- Node
  - JavaScript that can work on the server

### Template Literals

- Evaluates the expression in between the ticks!

```
const name = "Sidney";
console.log(`Hello, my name is ${name}`);
```

### Object Literals
```
const me = {
    'name': 'Sidney',
    'age': 26,
    'isSleeping': false,

};
console.log(me["name"]);
```
### Dot Notation
- DOT NOTATION indicates that console is an OBJECT.
  - EVERYTHING IN JS IS AN OBJECT EXCEPT PRIMITIVES.
  - Here, log is being INVOKED by the use of (). That means that it's a FUNCTION or METHOD.

```
const me = {
    'name': 'Sidney',
    'age': 26,
    'isSleeping': false,

};

console.log(me.age);
```

- Methods (Also known as functions!)
  - Methods invoke actions
  - Functions will ALWAYS Return something (reutrn is a keyword)
  - Types f returns:
    - Implicit return : undefined
    - Explicit return : return something very specific

```
checkDrinkingAge: function() {
    // Functions should have an EXPLICIT RETURN
    // Comparison operator - always return boolean
    return this.age >= 21;
  },
  checkHomework1: function() {
    // Getter
    return this.homework.hw1;
  }
};
```

- Chaining
  - Gives us access to objects within objects

```
//Continued example from above...
me.homework.hw2 = 'passed';
```


### Imperitive Programming

- An imperative language uses a sequence of statements to determine how to reach a certain goal. These statements are said to change the state of the program as each one is executed in turn
  - In short, its writing out line by line exactly what you want to do in your code!
  - Each statement changes the state of the program, from assigning values to each variable to the final addition of those values

```
// Example in Java, an imperitive language:
 int total = 0;
 int number1 = 5;
 int number2 = 10;
 int number3 = 15;
 total = number1 + number2 + number3;
 // Using a sequence of five statements the program is explicitly told how to add the numbers 5, 10 and 15 together
```
---
### Nov 7 - Object Oriented Programming

- A type of software design where the codebase is organized around objects and classes
  - Objects contain the functions and central logic of a program
```
Object-oriented languages are good when you have a fixed set of operations on things and as your code evolves, you primarily add new things. This can be accomplished by adding new classes which implement existing methods and the existing classes are left alone.
```
- Inheritance
  - Inheritance refers to the ability of one class to acquire properties and methods from another
  - Using inheritance in programming, we can create a structure of classes that inherit properties and methods from other classes.

- Refactoring code:
  - re-writing code for better readability or performance without changing functionality

```
const MyComponent = () => {
  const someFunction = () => 'Hey, I am text'
  return (
    <div>
      {someFunction()}
    </div>
  )
}

//This example above can be refactored to this below and still use the same functionality:

import { someFunction } from 'functionHelper.js'
const MyComponent = () => {
  return (
    <div>
      {someFunction()}
    </div>
  )
}
```

### Looping - Two Types For and While

- `For Loops` are staged with 3 components:
  - Starting Point: somewhere to take off (normally this is `i`)
  - Termination Condition: where the loop ends indicated when i is equal to that terination value
  - Iteration: how the value will get from the starting to termination point
  - Then set the conditions of the loop in congruence with these components inside:

```
for(let i = 1; i <= 10; i += 1) {
  console.log('i is', i);
  currentTotal += i; // currentTotal = currentTotal + i;
  console.log('currentTotal is', currentTotal);
  }
```
- Heres an example of how to loop through an object literal:

```
//Create Object literal numberSummerMachine
// Key value pairs startingNumber and endingNumber
//numberSummerMachine should have method, sumDaNumbers
//sumDaNumbers should use startingNumber and endingNumber current values to loop
//return sum of the numbers total


const numberSummerMachine = {
  "startingNumber": 0,
  "endingNumber": 50,
  sumDaNumbers: function (startingNumber, endingNumber) {
let currentValue = 0;
for(let i = this.startingNumber; i <= this.endingNumber; i += 1){
   currentValue += i;
    }
return currentValue;
}
};
console.log(numberSummerMachine.sumDaNumbers());
```

- `While Loops` keep iterating until the termination condition is reached or defined
  - "While this is true keep repeating until termination is reached":
  - While loops look like an if statement and it repeatedly checks its expression as long as it evaluates to `true`:
  - Note to not use while loops to iterate through thousands of lines of code

```
let n = 1;
while (n<=10){
console.log(n);
n++;
}
```


### Looping through Objects

- We can iterate through all of the values in an object, much like we would do with an array
  - `for...in` loops are specifically designed to loop through the properties of an object
  - Each iteration of the loop accesses a key in the object
  - The loop stops once it has accessed every property

```
let giraffe = {
  species: "Reticulated Giraffe",
  name: "Cynthia",
  weight: 1500,
  age: 15,
  diet: "leaves"
};

for (item in giraffe) {
   console.log(item + ", " + giraffe[item]);
}


species, Reticulated Giraffe
name, Cynthia
weight, 1500
age, 15
diet, leaves
```


### More Examples:

```// create a loop that starts at 1 and ends at 10.
//keep track of the current count.
// keep track of the total
let currentTotal = 0;
let currentNum = 0;
//expression that evaluates to a boolean
while (currentNum <= 10) {
    currentTotal += currentNum;
    currentNum += 1; //currentNum = currentNum + 1;
}
console.log(currentTotal);
//refactoring - rewriting the code for better readability or performance w/o affecting the functionality
let newTotal = 0;
//initializer; exit condition; iterator
for (let i = 1; i <= 10; i += 1) {
    newTotal += i; //newTotal = newTotal +i
}
console.log(newTotal);
//add function
// named parameters allow functions to receive additional information to complete a task
function numberSummer(startingValue = 0, endingValue = 10) {
    let otherTotal = 0;
    for (let i = startingValue; i <= endingValue; i += 1) {
        otherTotal += i;
    }
    return otherTotal;
} //we invoke functions and can pass in arguments that 'match up' to the named parameters
console.log(numberSummer());
```


---
### Nov 12 - ForEach, Callback functions, Reduce Arrays and Forms
