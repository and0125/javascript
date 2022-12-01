# Chapter 3 notes: Multiple Values

There are two data types that hold more than just one value:

- arrays: an object that allows you to store mutliple values, similar to lists.
- objects: a collection of properties and methods. The properties can be thought of as variables, which can be simple data types or other objects.

## Arrays and Their Properties

### Creating Arrays

Arrays are generally created by using square brackets:

```javascript
arr2 = ["black", "white", "orange"];
```

Another way to create arrays, which should be used sparingly, is to create an empty array with a given number of items:

```javascript
arr3 = new Array(10);
```

Arrays can hold multiple types of data as well; the values will not be converted to a single data type.

You can use `typeof` to get the type of each element in an array:

```javascript
console.log(typeof arr[0]);
```

If an array is defined with the `const` operator, then the array itself can be changed element by element, but the full array cannot be replaced by another array.

For example:

```javascript
const arr = [1, 2, 3];
arr[0] = "new value";
console.log(arr); // this will work

arr = ["I replaced the whole array"]; // this will not work
```

### Accessing Elements

Arrays can be accessed by a zero-based index. JavaScript does not handle negative number index values, or non-existent index values (i.e. when the index is greater than the length of the array).

However, you can directly assign values to index values that do not exist in a given array:

```javascript
arr = [1, 2, 3];

arr[-1] = "this shouldn't work"; // this will work
arr[3] = "this should work"; // this will work too
```

### Array Properties and Methods

Arrays have a built in length property accessed by: `array.length`. The length is always one integer greater than the maximum index, because the index starts at zero.

So to access the last element of the array, you need to use: `array.length -1`.

Because you can write in array elements at indices that don't exist in a given array, there is a proper way to add elements, while avoiding skipping a certain index. You can also sort and delete elements from an array.

the `push` method adds a value to the end of the array:

```javascript
arr = [1, 2, 3];

arr.push(4); // adds 4 to the end of the array
```

The push method returns the new length of the array.

To add a new element to the middle of the array, you use the `splice` method:

```javascript
arr = [1, 2, 3];
arr.splice(2, 0, 4, 5); // adds the numbers 4 and 5 starting at index 2, while deleting 0 elements from the array
```

You can also add an array to another array using the `concat` method:

```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

arr3 = arr1.concat(arr2);

// also a valid use:
arr3 = arr1.concat(7, 8, 9);
```

To remove the last element of an array, use the `pop` method : `arr3.pop()`. This command outputs an array with the last element removed, not the element that was removed itself.

To remove the first element, you can use the `shift` method : `arr3.shift()`. This command outputs an array with the first element removed, not the element that was removed.

Splice is another command that can be used to remove elements when it does not specify what values to addd to the array: `splice(1,3)`, instead of `splice(1,3, 4,5)` (the second one adds 4 and 5 as elements to the array starting at index 1). This deletion is inclusive, so the values at the endpoint indices (1 and 3) will be deleted.

You can delete a certain value from the array and make the position empty (undefined) by using the delete method:

```javascript
delete arr8[0];
```

If you want to check if a value is present in the array, use the `find` method. This method defines a function, and then executes the function on every element on the array until it finds a match, otherwise it returns undefined.

```javascript
arr8 = [2, 6, 7, 8];

// first way to write this
let findValue = arr8.find(function (e) {
  return e === 6;
});
// another way to write this
let findValue2 = arr8.find((e) => e === 10);
```

to find the index with a certain value use the `indexOf` method:

```javascript
let findIndex = arr8.indexOf(8);

let findIndex2 = arr8.indexOf(6, 2);
```

The value of indexOf() is either the index position of the value passed in or -1 if the value is not found in the array.

You can also use the `lastIndexOf` method to access the last index matching a value passed in.

Sorting the array is done with: `array.sort()`. Also, there's a reverse sorting: `array.reverse()`.

### Multidimensional Arrays

You can create an array of already existing arrays, which can create a 2-dimensional array, and you can nest arrays to create multi-dimensional arrays.

You can access the nested arrays with nested indices: `array[0][1]`; this accesses the first nested array (array index of 0), and the second element of that array (the value of index 1).

## Objects in JavaScript

objects are a way to define things that hold values, methods, and properties. They are ways to compartmentalize values in ways that can reflect real-world objects by their data fields and the actions that people perform with those objects.

These objects are defined by grouping multiple variables into one set, by using the curly brackets.

```javascript
let dog = {
  name: "Kiki",
  weight: 2.4,
  color: "brown",
  breed: "chihuahua",
};
```

You can reference these properties like key-value pairs: `dog['color']` and `dog['weight']` for example. Also, you can use dot notation for this as well `dog.name` and `dog.weight`. You can use both ways of referencing properties to set the properties to new values:

```javascript
dog.weight = 3.5; // changing weight to 3.5
```

You can change the data type and the data value for these properties using this assignment as well:

```javascript
dog.weight = "unknown"; // Javascript will automatically detect this change
```

You can also reference property names through variables:

```javascript
let variable = "age";
console.log(dog["variable"]); // will output the value of the age property
```

### Objects and Arrays inside Objects

You can define an object within an object to hold values that are tied to a particular property, like address can be broken into a street number, street name, zipcode, etc. These can be referenced by property names:
`company.address.zipcode`.

You can also define arrays in an objects, and those can be referenced by index:

`company.activities[1]`.

its also possible to put objects in arrays, objects in arrays in objects, and so on. You can statck object and array element request indefinitely.

## Summary

Whenever you need to list items, use an array.

Whenver you want to represent something with properties that have descriptive names, use an object.

Object proerties can be of any type.

Objects and arrays can be stacked together to properly represent the real-world object you'd like to represent.
