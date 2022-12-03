# Chapter 6: Functions

## basic functions

We have been using functions in many of the exercises already; they are recognizable by the parentheses at the end of a function name.

```javascript
array.sort();
array.push():
console.log();

// and more are all functions
```

## Writing Functions

Writing a function can be done using the function keyword:

```javascript
function functionName() {
  //content of function
}
```

Note that functions can contain variables, and variables can contain functions as well. But functions are actions, and variables contain certain values. having a variable store a function will be re-visited with later topics.

Javascript will not run the actions when the functions are not invoked.

## Naming functions

Best practices for naming functions in JavaScript are:

- camelCase: start with lowercase, each distinct word in the name afterwards will be Capitalized.
- Make sure the name describes what the function is doing.
- In using the name to describe an action, use a verb instead of a noun for a function name: `addNumbers()` or `sum()` are better function names.

## Parameters and Arguments

these are both ways to refer to information passed into the function that the function will act on.

Parameters are the information passed in during the function definition (i.e. the abstract `x` and `y` you might reference in defining `addNumbers`).

```javascript
// x and y are parameters of the function
function addNumbers(x, y) {
  return x + y;
}

// 5 and 6 are arguments passed into the function for output
addNumbers(5, 6);
```

Arguments can be said to call the function; parameters define the function.

## Default or Unsuitable Parameters

When you make a function, JavaScript can call the function and run it without validating that the arguments are valid input.

In these cases, it can be helpful to define default values for the parameters of a function, which are the values the function asssumes when it is called without specified arguments. The values that are used for calling or invoking the function are prioritized over the hardcoded default arguments.

If you call a function with more arguments than parameters, JavaScript will use the values in order as arguments passed in, and won't use any of the arguments that outnumber the number of parameters.

```javascript
addNumbers(1, 2, 3, 4); // this returns 3, because only 2 arguments are expected
```

## Special Functions and Operators

### Arrow Functions

Arrow functions are special ways of writing functions, which can be confusing.

```javascript
// arrow function
(param1, param2) => {
  //body of function
};
```

Arrow functions are useful when you want to write an implementation of a function on the spot, like when you want to write a function inside another function as an argument. They are shorthand notation for writing a full function.

You can store an arrow function inside a variable name to invoke the function:

```javascript
let addNumbers = (x, y) => {
  console.log(x + y);
};

addNumbers(1, 2); // returns 3 to the log
```

You can also invoke these with an empty set of parentheses to indicate no arguments are expected.

```javascript
let addNumbersFake = () => {
  console.log("Fooled you");
};
```

You can combine the arrow function with certain built-in methods. For example, you can use the foreach() method on an array. This method executes the function for every element in the array:

```javascript
const arr = ["my", "hand", "hurt"];

arr.forEach((e) => console.log(e)); // will output the elements in arr
```

### Spread Operator

This operator is three dots, or an ellipsis, used before a referenced expression or string, nad it spreads out hte arguments or elements of an array. That is, it takes elements in an array, and then can add the elements into another array:

```javascript
let spread = ["my", "spread", "words"];
let message = ["other", ...spread, "words"];
```

From the sample code, this message array becomes `['other',"my", "spread", "words", "words"]`.

This spread operator can also be used to send multiple arguments to a function.

This operator avoids having to copy a long array or string into a function, which saves time and reduces code complexity.

You can call a function with multiple spread operators as well.

In python, this is similar to the asterisk or double asterisk operator for enumerating a dictionary as arguments.
