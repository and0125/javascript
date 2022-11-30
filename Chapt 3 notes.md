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

### Array Properties

Arrays have a built in length property accessed by: `array.length`. The length is always one integer greater than the maximum index, because the index starts at zero.

So to access the last element of the array, you need to use: `array.length -1`.
