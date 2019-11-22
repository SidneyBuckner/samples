# ES6 JavaScript

[MDN Web Docs](https://developer.mozilla.org/en-US/)
[JavaScript Fundamentals](https://javascript.info/first-steps)

[Intro to JavaScript - Savvy Coders](https://savvy-coders.gitbook.io/course-materials/11)

[Notion – The all-in-one workspace for your notes, tasks, wikis, and databases.](https://www.notion.so/SavvyCoders-3a86e3eb7b204816b65cdd8dad624acb)

[GitHub - SidneyBuckner/samples: samples for savvy coders](https://github.com/SidneyBuckner/samples)


### Oct 31 - Primitive Data Types

- Strings
  - "dowpinrkg", "Sidney", "Meatloaf"
  - Identifies a set of characters in between quotations

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
### Nov 7 - Inheritance

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
```
//While Loops

const numberSummerMachine{
  startingNumber: 1,
  endingNumber: 10,
  sumDaNumber: Function(){
  let total = 0;
  let i = this.startingNumber
  while(i <= this.endingNumber){
    total += i;
    i += 1;
  }
  return total;
  }
};
```
##### A method inside of an object literal with key value pairs automatically assumes that the pairs is what will be put into the parameters

- Getters and Setters
  - [getter - JavaScript \| MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
  - OOP case that calls values outside of a scope of another function, method etc.
  - To execute a function whenever a specified property is attempted to be changed

- For `Setters`
  - Provides protective access to changing or manipulation of new properties
  - It must have exactly one parameter
  - It can have an identifier which is either a number or a string
  - Binds an object property to a function to be called when there is an attempt to set that property

- For `Getters`
  - to allow access to a property that returns a dynamically computed value
  - to reflect the status of an internal variable without requiring the use of explicit method calls
  - Binds an object property to a function that will be called when that property is looked up
  - It must have exactly zero parameters


```
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
//Setters that allows updating of the local data
setStartingNumber: function(num){
  this.startingNumber = num;
}
};
console.log(numberSummerMachine.sumDaNumbers());
```

---

### Nov 12 - Functions: Under the Hood

- Functions can recieve other functions, invoking it
  - When this occurs the function gets stacked on top of the previous version of the function

```
function doMath(x, y, mathFxn){
    return mathFxn(x,y);
}
function add(x,y){
    return x + y;
}
console.log(doMath(add);)
//'doMath' is expecting a function 'add' to be passed through as a parameter
```
 - `Console.trace`
   - Traces how functions are executed in the callstack
   - "Under the hood" of JavaScript
```
(from the example above when you initilize with node index.js in the terminal/gitbash:)
Trace
    at doMath (/Users/sidneybuckner/Code/SavvyCoders/SidneyBuckner/index.js:5:11)
    at Object.<anonymous> (/Users/sidneybuckner/Code/SavvyCoders/SidneyBuckner/index.js:20:13)
    at Module._compile (module.js:643:30)
    at Object.Module._extensions..js (module.js:654:10)
    at Module.load (module.js:556:32)
    at tryModuleLoad (module.js:499:12)
    at Function.Module._load (module.js:491:3)
    at Function.Module.runMain (module.js:684:10)
    at startup (bootstrap_node.js:187:16)
    at bootstrap_node.js:608:3
```

- CallStack
  - when a function invokes an additional function
  - Functions get stacked on top of eachother
  - WHLIE THE CALL STACK IS ENGAGED, JS CANT DO ANYTHING ELSE (single threaded)

- Function Factory
  - A Function that returns out and builds another function
  - The example below uses the concept of closure

```
function initSportScorer(pts) {
  return function(score) {
    return score + pts;
  };
}
const threePointer = initSportScorer(3);

console.log(threePointer(99));

*initSportsScore is the outer Function
*initSportsScore receives pts then immediately discards its reference to pts
*pts remains reference by the inner function (score), this is an example of CLOSURE

*A variable loses reference from the original
*function but has become 'enclose' with a reference to the inner function

```
- A good rule of thumb to start function factories would be to start with the skeleton and fill in the correct values from there:

```
function name(parameters){
  return function(){

  }
}
```

* See below on what is happening with the function
```/**
 * function(score){
 * return score + 3;
 * }

 ```
### Arguments vs. Parameters

- Named parameters are in a function declaration
`function myfunct(a,b){}`
- Arguments are passed when the function is invoked!
`myfunct(2,3);`

### Expressions vs. Statements
```
2 + 3;
//Nothing useful comes from an expression

const y = 2+3;
const z = 2 >= 3;
//Statements stores or executes the expression in conjunction with keywords

```
*** Note Arithmatic is LTR Associated
*** Note Assignments is RTL Associated

### Logical Operators
- `&&` and `||` Conditions
  - ('and' and 'or')

- Note for `&&`
  - Both the left and right operands MUST BE TRUE for that expression to complete expresison

-  Note for `||`
  -Either the left or right operand must be true to complete the expression
  -If the first operand is found true for, then then the other will never be evaluated
```
const x = 3;
const y = 5;
const z = 10;
console.log(x , y && x < z);
console.log(x < y || x < z);

```

### If Statements
- A Set of conditions that control the flow of the user based on the state of the application
  - `If true/false/something -> then do this!`
```
Function hiOrLow(x,y){
 if(x >y){
  return "x is more!";
  }
  console.log(hiOrLow(31,52));
};

```

---
### Nov 14 - Recursion and Primitive Passes (For all Data Types)

Lets create a function where you pass in a function with a loop insdie that returns a string with the following:
"all work and no play makes Jack and dull boy" a given number a times:

```
function writePsychoBook(num) {
  let paragraph = "";

  for (let i = 0; i <= num; i += 1) {
    paragraph += "All work and no play makes Jack a dull boy. ";
  }

  return paragraph;
}
console.log(writePsychoBook(99));
```

- Recursive Functions
  - A recursive function is a function that calls itself!
  - we start somewhere and call the function until we cant call the funciton anymore!
  - Thats why its important to have an exit condition or it will loop infinitely

```
function writePsychoBook(n) {
  console.trace();
  if (n === 0) {
    return "I am done";
  }

  return `All work and no play makes Jack a dull boy ${writePsychoBook(n - 1)}`;
}
console.log(writePsychoBook(99));

// The if statement n === 0 is the exit condition!
```

- Math.pow Object Example:

```
function myPow(num, exp) {
  let ret = num;

  for (let i = 1; i <= exp; i += 1) {
    ret += num;
  }

  return ret;
}
console.log(myPow(2, 3));

//recursion version:

function myPow(num, exp) {
  console.log("the expoenent is: ", exp);
 if (exp === 0) {
  return 1;
}
  return (num *= myPow(num, exp - 1));
}
console.log(myPow(3, 4));

```
- Factorial Example:

```
function factorial(num) {
  let ret = 1;

  for (let i = num; i >= 1; i -= 1) {
    ret *= i;
  }

  return ret;
}
console.log(factorial(6));


//recursion version:

function factorial(num) {
  if (num === 0) {
    return 1;
  }

  return (num *= factorial(num - 1));
}
console.log(factorial(4));
```

- Heaps
  - vague area in memory where values hang out variable reference those values in the heap
  - values will be removed by garbage collector if not used from heap

- Pass by Value
  - The primitive cannot be changed when reassigned
  - Two copies of values in two different
  - One can be reprogrammed to serve another purpose but the other will stay the same
  - when one copy is changed the original value is thrown away and replaced

```
if I get a new tesla and Karen get a new tesla, they are two copies for the same type of tesla. If I get mine detailed and Karen doesnt, is how to describe pass by value. My Tesla's original copy is replaced by the detailed version!

```

- Pass by Reference
  - THE OBJECTS ITSELF CAN BE MUTATED
  - Cant change the object name just the value!
  - You can add new properties in the Object using dot notation and still reference the same thing!

```
// Passes by Reference

const me = {
  name: "Mark"
};
const me2 = me; //HERE IS WHERE BOTH VARIABLES POINT TO THE SAME VALUE!

me.name = "fred";
console.log(me);
console.log(me2);

```

### FizzBuzz
- If we pass a number thats divisible by both 3 and 5, log "Fizzbuzz"
  - If the number is only divisible by 3, log "Fizz"
  - If the number is only divisible by 5, log "Buzz"
  - if the number is divisible by neither, log the number

I wont tell you the solution, yet!
---
### Nov 15 - Arrays ar Objects!

- Collections of name/value pairs
  - Autoincremented numerical keys (We dont name the keys!)
    - Aka index starting with 0!
  - Arrays and Objects are collections!
  - Dont confuse the braces object use with brackets that arrays use!

- Collections are Composite data types
```
//This is an object!
const myObject {
  name: "Sidney",
  age: 26}
 myObject["pronuns"] = "she/her";

//This is an array!
const myArray [];
myArr[0] = "Hello"

```

### Loops over Arrays

- Lets make a loop for the array and return all of the Names that start with 'M'!

```
const myArr = [
  "Andrew",
  "Billy",
  "George",
  "Heather",
  "Madison",
  "Marque",
  "Martin",
  "Nikki",
  "Oscar",
  "RhondaLyn",
  "Sidney",
  "Tracie",
  "Wallat"
];

function nameMs(myArr) {
  const mNames = [];

  for (let i = 0; i < myArr.length; i += 1) {
    if (myArr[i].startsWith("M")) {
      mNames.push(myArr[i]);
    }
  }

  return mNames;
}
```
---

### Nov 18 - Truthiness and falseyness

- Unary Operator (!) and Binary Operators (&&)

- `!` or Bang
  - shorthand for "not"
  - !true or !false

- What do empty objects or null bring back? Are they Truth-y or false-y???
  - Any value at all is true! An empty object is still something An empty array is stil true!

```
console.log(0); // False
console.log(!0); // True

console.log(2); // True
console.log(!2); // False

// `!` and indicates you either have something or nothing as log as its a primitive. Any number apart from 0 is True. An expty string is false.

//Any value at all is true! An empty object is still something An empty array is stil true!

//It was true but not anymore. It was false but not anymore!

```

### Function Factories and Function Constructors
- Constructors are a blueprint object (skeleton object to be run at a later time!)

- When the Keyword 'this' works, and when it doesnt:
  - A Couple Notes for the example function factory below (note you shouldnt be doing OOP with the example below):


```
const groceries = "I am a grocery list!";

function initObj(potatoes, cereal, anotherFruit) {
  return {
    potatoes,
    cereal,
    fruit: anotherFruit,
    getChecklist: () =>
      `Im going to the grocery store and really need ${this.cereal}`,
    anotherChecklist: function() {
      return `oh dear! I forgot to also get ${this.potatoes}`;
    },
    oneMoreChecklist: () =>
      `Last but not least, I need to pick up one ${fruit};`
  };
}
const myList = initObj("redskins", "froot loops", "bananas");

console.log(myList);
console.log(myList.getChecklist());
console.log(myList.anotherChecklist());

What gets logged is below:

// { potatoes: 'redskins',
//   cereal: 'froot loops',
//   fruit: 'bananas',
//   getChecklist: [Function: getChecklist],
//   anotherChecklist: [Function: anotherChecklist],
//   oneMoreChecklist: [Function: oneMoreChecklist] }
// Im going to the grocery store and really need undefined
// oh dear! I forgot to also get redskins
```
  - Arrow Functions do not know how to use the Keyword 'this'!!! The Template Literal returns "Undefined" (eg. getChcklist) 'This' looks globally for the object!
- The function Declaration in ES6 will pick up the object using the Keyword 'this' ( eg. anotherChecklist)
- Just dont do the the third (eg. oneMoreChecklist)

### Object Oriented Programming
- Other OOP languages use classes (Class based OOP)
  - Modeling what you need based on Real World Objects
  - Referencing alagories, objects, people, things etc.

#### Classes
[LC 101 - 18.1. What Are Classes? ](https://education.launchcode.org/intro-to-professional-web-dev/chapters/classes/introduction.html)
[OOP JavaScript Concepts](https://www.dropbox.com/s/7debpzansdfo1uk/oop.pdf?dl=0)
- JavaScript is Prototype based OOP
  - [Classes - JavaScript \| MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

### Function Constructors
- The constructor property returns a reference to the Object constructor function that created the instance object.
  - Doesn't return or invoke anything and is referenced by a capital letter in the constructor's name
  - A Constructor is invoked with an instance using the keyword 'new'
  - The instances execute those methods and keeps the version of those properties
  - Methods are duplicated for each and every object build by a constructor
  - If you want to return an object, use a constructor
  - If you want to return a function, use a function factory

- We can instantiate variables with const and let
  -  Instantiation patterns are ways to create something in JavaScript
- We can create a new instance of an object with the keyword 'new'

```
function Profile(first, last, age, occ) {
  (this.first = first), (this.last = last), (this.age = age), (this.occ = occ);

  this.canDrink = function() {
    if (this.age < 21) {
      return "My favorite wine is French. French wine is the best wine.";
    }

    return "Just kidding, Cali wine is the best.";
  };

  this.getBio = function() {
    return `hi, my name is ${this.getFullName()}. I am ${
      this.age
    } years old. ${this.canDrink()}`;
  };
  this.getFullName = function() {
    return `${this.first} ${this.last}`;
  };
}
const me = new Profile("Sidney", "Buckner", 26, "Software Engineer");

console.log(me);
console.log(me.getBio());
console.log(me.getFullName());


```
Extra Resources:
[11-19-1-vimeo on Vimeo](https://vimeo.com/374184792/29b651bc7f)
[11-19-2-vimeo on Vimeo](https://vimeo.com/374179922/1fc833c854)
[fxn-constructors on Vimeo](https://vimeo.com/374209290/bac71d25dd)

---
### Nov 19 - Getters, Setters Error Logs and Arrays

```
function Profile(first, last, age, occ) {
  (this.first = first), (this.last = last), (this.age = age), (this.occ = occ);

  this.canDrink = function() {
    if (this.age < 21) {
      return "My favorite wine is French. French wine is the best wine.";
    }

    return "Just kidding, Cali wine is the best.";
  };

  this.setHobby = function(hobby) {
    if (hobby) {
      this.hobby = hobby;
    } else {
      console.error("HOBBY NOT FOUND!!!");
    }
  };

  this.getBio = function() {
    return `hi, my name is ${this.getFullName()}. I am ${
      this.age
    } years old. ${this.canDrink()}`;
  };
  this.getFullName = function() {
    return `${this.first} ${this.last}`;
  };
}
const me = new Profile("Sidney", "Buckner", 26, "Software Engineer");

console.log(me.getFullName());
console.log(me.getBio());

me.setHobby("Arts and Crafts!");
console.log(me);

```
### Prototyping and Functional Programming

- Objects in JavaScript have an internal property known as prototype
  - Its a reference to another object and contains common attributes/properties across all instances of the object
- Creating a Prototype function outside of the object!
  -  That helps the instance instances maintain their nuique properties

***The instances no longer carry around their own copy of the method. theyre managed by the prototype***


```
// constructor function
function Person(name, age, job) {
  (this.name = name), (this.age = age), (this.job = job);
}

//Lets Create a Prototype function outside of the object that helps the instance instances maintain their unique properties!
Person.prototype.whatIsName(){
  if (typeof this.name === "string") {
    return this.name;
  }
  return "PLEASE ENTER A NAME!!!"
}

Person.prototype.hobbies(arr){
  this.hobbies = arr;
}

const hobbies = ["coding", "marching band", "video games"];

//create an instance of the blueprint constructor
const me = new Person("Sidney", 26, "Engineer")
console.log(me);
me.whatIsName();
me.addHobbies(hobbies[0]);
console.log(me);

```

### Arrays with Prototyping

[Array.prototype.find() - JavaScript \| MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

### The Method `pop()`

- The `pop` method takes away one index from the bottom of the array.

```
const numbersAndStrings = [
  12,
  "Sid",
  35,
  61,
  "Person",
  90,
  "front",
  "dev",
  1440,
  "back"
];

for (let i = 0; i < numbersAndStrings.length; i += 1) {
  console.log(numbersAndStrings[i]);
}

```
