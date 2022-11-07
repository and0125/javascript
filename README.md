# javascript

## Chapter 2: variables

Variables are the first building block you of most coding languages. In javascript, they are assined by:

```javascript
firstname = 'John';
x = 2;
```

Without variables, code would do the exact same thing every time it was run.

### Variable Declarations

There are 3 ways to declare variables:

- let
- var
- const

Once a variable is declared, you can refer to it using the name of the existing variable, which can be used for replacing values or for calling the value.

A variable defined in a script is called *hard-coded*, becuase the variable isn't defined dynamically from some external source.

A variable definition consists of three parts in javascript:

- a variable defining keyword (let, var, or const)
- a name
- a value

The difference between let and var is related to scope:

- var has a global scope: you can use this variable throughout the entire script
- let has block scope: scope means you can only use this variable in the bracketed code block the variable is defined in.

'const' is used to define variables that only get defiend once. If you try to re-assign a const variable, you will get an error.

'let' should be the most common way you use to define variables.

### Naming Conventions

variable names start with a lowercase letter and they should be descriptive to make your code easy to understand.

variable names cannot container spaces, but they can use underscores.

 A common convention is to use camel case, where you start with a lowercase word, but then capitalize the first word in every new word after the first word

 another is snake case, where you make all words lowercase, but connect them with underscores or hyphens.

### Data Types

JavaScript is a loosely typed language, so that means that Javascript determines the type of a variable based on the value. This means the type doesn't have to be explicitly defined.

**NOTE:** this isn't the case in other languages, and it's because these languages are meant to squeeze every bit of speed out of a program by reducing the memory each variable uses to a minimum.

There are two data categories of data types, primative and complex. There are seven primative data types:

- String: used to store text values. Declared similarly to python, except you can use backticks to make strings that can reference variables -- `let's learn ${language}`.  Strings also  use the backslash to escape special characters to get their text representation.
- Number: used to represent numbers, real and integer. These are a 64-bit floating point number. This data type can also hold hexadecimal numeric values, decimal values, and binary numbers.
- BigInt: has a limit between 2^53 -1 and -(2^53 -1). You cannot perform operations between a number and a bigInt value; only operations between BigInts and between Numbers are possible.
- Boolean: holds two values true or false. 
- Symbol: used when its important to represent data as variables that are different, even if they hold the exact same value. This is like for records in a database. Even if two records are the same, that doesn't necessarily mean that they should be seen as the exact same value. These symbols can be handy as properties of objects.
- undefined: this is a data type for a variable that has not be assigned a value, do this by defining a variable with a name but without a value `let x`.  You could also purposefully assign this variable the undefined value, but that's a bad practice to do, especially when you are trying to check the value of a variable to see if its the same as the value of another variable. if you assign something as undefined, and the other value is undefined, the program will show these values as equal, and not as both undefined. This is because an automatically undefined variable, and a manually undefined variable are seen as the same value.
- null: This is a special value for saying that a variable is empty or has an unknown value, which solves the equality problem from assigning a variable as undefined.  Use `let x = null;` instead. An undefined variable is not considered the same as a null variable.

### Modifying and Analyzing Data Types

One of the methods that's useful in checking the type of a variable is `console.log` to print the variable out to the console.

Another one is `typeof` which returns the type of the variable. This can be called with parentheses or without:

- `typeof variable2;`
- `typeof(variable2);`
  
  Technically, typeof is an operator, not a method, unlike console.log, but sometimes using brackets can make your code more readable. 

  Note that null actually returns an object and not a type when you call typeof on a null variable. It will return `unknown object` instead of a type.

There are three conversion methods:

- String(): converts a variable to a string representation.
- Number(): converts a variable to a number representation, if that cannot be done, it will return Not a number (NaN).
- Boolean(): converts a variable to a boolean representation. This will be true for everything except for null, undefined, 0, an empty string, and NaN.

Note that an empty string and a null value will be converted to zero when Number() is used.

Note that anythign that can't be interpreted as a number by simply removing quotes will evaluate to NaN.

### Operators

These work pretty much the same as python, except for the ++ and -- I think.

For logical operators:

- && : and
- || : or 
- != : not

## Chapter 3: Multiple Values

This section covers:

- arrays and their properties
- array methods
- multi-dimensional arrays
- Objects in JavaScript
- Working with Objects and arrays

### Arrays

Arrays are lists of values, which can be of all data types, and one array can contain different data types.

You instantiate an array by:

```JavaScript
arr1 = new Array("pupr", "gree");
arr2 = ["new", "car", "smell"];
```

both of these lines of code make an array, but the second method is the preferred way to do this.

You can instantiate an empty array with the first line:

```JavaScript
arr3 = new Array(10);
```

This will make an array with 10 undefined elements, not an array holding the value of 10.

JavaScript stores each value in the array with its own data type.

If you define an array as a const, you can change the individual values of the array, but you cannot overwrite the entire array.

You can access elements of an array using the index with square brackets, like python. You can overwrite the element at a specific index by: `arr[3] = 4;`.

Note that if you try to overwrite an array element at an index that doesn't exist, JavaScript will make that element for you instead of throwing an exception. 

Arrays have a built in length method/property, that can be accessed with `arr.length`. This returns the number of values the array has. Note that the length will always be one higher than the index, because the index starts at zero, but counting non-empty array values starts at 1. 

### Array Methods

Arrays come with a few methods built in like the length property:

- Push(): adds value to the end of the array.
- splice(): adds in values in the middle of an array. has three arguments:
  - starting index: the index to start added in elements
  - deleted elements: the number of elements to delete starting at the starting index. If you make this value higher than the number of elements, JavaScript will simply stop as soon as it runs out of values to delete.
  - inserted value: the value or values to be inserted into the array at the starting index.
- concat(): concatenates two arrays together, but also can add single values to an array as well. 
- pop(): removes the last element from the array.
- shift(): removes the first element from the array, shifting all other indices down one. 
- splice() (again): you can also use the first two parameters of splice to just delete elements from theh array at any index, which is useful. It doesn't require you to add anything into the array.
- delete: use this to make a value in the array undefined, but not to remove the index from the array. 
- Find(): this is an-inline search function that you can use to search an array.
  - example: `arr9.find(function(e) {return e === 6});`.
- indexOf(): finds the index of a specified value in the array. If the value is not found, -1 is returned.
- sort(): you can call sort on an array to change it to a sorted order: `arr9.sort()`.
- reverse(): reverses the order of the array.
- 