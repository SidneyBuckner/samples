# JavaScript 

### Oct 31 - Primitive Data Types
[MDN Web Docs](https://developer.mozilla.org/en-US/)
[JavaScript Fundamentals](https://javascript.info/first-steps)
[Intro to JavaScript - Savvy Coders](https://savvy-coders.gitbook.io/course-materials/11)
[Notion – The all-in-one workspace for your notes, tasks, wikis, and databases.](https://www.notion.so/SavvyCoders-3a86e3eb7b204816b65cdd8dad624acb)
  
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

### Nov 4 - Introductions: Whats the Purpose of This Course?

