# Loops

There are five types of loops in JavaScript:

- while loop
- do while loop
- for loop
- for in loop
- for of loop

## While loop

Syntax:

```javascript
while (expression) {
  //do this code
}

// example
i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
```

This loop will keep executing until the expression is false.

## Do While Loop

Syntax:

```javascript
do {
  //do this code
} while (condition);

//example

i = 0;
do {
  console.log(i);
  i++;
} while (i <= 10);
```

This loop will keep executing until the expression is false.

## For Loops

Syntax:

```javascript
for (initialize variable; condition; statement) {
  //do this code
};

// example
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

These can be useful for creating sequences and adding values to arrays.

Also the statement doesn't just have to be incrementing or decrementing by 1 or -1; you can make that statement a condition like `i = i +2` for only doing even numbers, or any other expression suitable for your program.

## Nested Loops

Often this is not the best solution to a problem, but it can be a good solution sometimes:

```javascript
while (condition 1){
    // code that gets executed if condition 1 is true
    while (condition 2) {
        // code that gets executed if condition 2 is true
    }
}
```

You can next any type of loops in any kind of order.

## Loops and Arrays

loops are great ways to interact with entire arrays to make sure an operation happens for every element.
