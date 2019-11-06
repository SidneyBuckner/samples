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

- Null
  - Blank
  - Intentional nothing

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
  - Objects can hold constants, functions, variable, arrays...

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

```
const me = {
    'name': 'Sidney',
    'age': 26,
    'isSleeping': false,

};

console.log(me.age);
```
