# Built-in JavaScript methods

Any method that was not defined in our files is a built-in method.

The difference between a method and a function is that a function is defined in the script, and a method is defined inside a class. So methods are functions for a class and instances of that class.

Methods that return a result can e cianed together as well; like string modification methods.

## Global JavaScript Methods

the global JavaScript methods can be used without referring to the built-in object that they are a method for.

For example, the Number object is a built-in JavaScript object, so you don't need to write `Number.isNan(x)`, and can instead write `isNaN(x)` directly.

JavaScript was built to have some of these methods available directly. The global methods were chosen as the most common methods through the perspective of the creators of the language, but sometimes these can seem arbitrarily chosen.

## Decoding and Encoding URIs

Encoding is simple converting a string of characters from one shape to another. One common encoding method is the percent encoding, also called the URL encoding.

As a note, a uniform resource identifier (URI) is an identifier of a specific resource in an API. A URL (universal resource locator) is a subcategory of a URI that is not only an identifier, but also holds information on how to access the resource (i.e. the resource's location).

You can encode and decode URLs with the percent encoding, and do encoding and decoding on any string or number for that matter.

The percent/URL encoding replaces the spaces in a URL/URI with %20, because spaces can't be present in the actual URL. This way, the input can be parsed from the percent signs.

There are two pairs of built encode and decode methods. You cannot have a URI with spaces, so working with these methods is crucial in order to work with variables containing spaces.

### Methods

There are two methods to perform the actions of encoding and decoding: `deocodeURI()` and `encodeUri()`.

Truly, the decoding URI is a broken representation of the URI, and needs to be encoded for proper resolution.

This is great for fixing broken URIs, but its actually not useful when you need to include other special characters. For URIs with other special characters, there are other methods.

These other methods are the `decodeUriComponent()` and `encodeUriComponent()`. These can handle URLs with query parameters.

### Don't Escape

There are two global methods that are also available for encoding and decoding called escape and unescape respectively. These are strongly discouraged and may be removed eventually.

## Parsing Numbers

the method `parseInt()` changes strings to integers. It's a part of the number class but is a global method.

This method stops working as soon as it runs into a non-numeric character in the string. If it is passed an entire string, it will return `NaN`.

There's another method called `parseFloat()` that parses floats from strings. This method returns the numbers and can go past the first dot, but not a second dot or non-numeric character. Also, if a single integer is passed to `parseFloat()` it will return an integer, not a float with a decimal point.

## JavaScript Eval Function

This global method executes the argument as a JavaScript Statement. This means that it will just do whatever JavaScript is inserted in the function, as if the Javascript expression were written in that spot in place of the eval function.

This is convenient for working with injected javascript, but injected code comes with great risks. These risks can be dealt with, but in a later chapter.

Eval can also be used in an HTML document, see page 175.

```HTML
<html>
    <body>
<input onchange="go(this)" /> // Renders an input box
<script>
function go(e) {eval(e.value);}
</script>
</body>
</html>
```

This script will insert whatever code gets inserted into the input box as if it were written in the script portion.

This can seem useful because it can change your application based on input, but you have to be careful using this because of security.

The security cocern here is that this method will execute externally developed code without checking it for malicious content.

There are always better substitutes for using this function in most situations, but it may be useful if you get to an advanced point for creating templating engines, developing your own interpreter, and any other development that deals with JavaScript core tools. but know that this method must be controlled very carefully.

## Advanced Array methods

To perform an action for every element in the array, use the method `forEach()`. This mthod excepts a function, and will execute that function for each method in the array.

```javascript
arr.forEach(function) // syntax for forEach
```

This method is extremely useful for more functional programming projects, especially when functions can get chained together.

To filter an array you can use the `filter` method. This function takes a function as an argument and the function should return a boolean. Every element in the array is evaluated by this function, and the values for which the function returns true for will be returned. The filter method returns a new array made through the filter, it does not modify the original array.

To check a condition for all elements, you want to use the `every` method. This will evaluate a function that returns a boolean as well. it will check if the condition is true for all elements in the array, and false if it is not.

The `copyWithin` method can be used to replace a part of the array with another part of the array. This function takes three parameters:

- the first is the target position to which the values get copied
- The second one is the start of what to copy to the target position
- the third one is the end of the sequence that will be copied to the target position, excluding the last index.

This function does change the content of the original array but not the length of the orginal array.

Sometimes you'll need to change all the values in the array. with the array `map()` function you can do this operation. This method will return a new array with all the new values. You'll have to say how to create these new values. This can be done with the arrow function.

```javascript
let arr = [1, 2, 3];
let maapped_arr = arr.map((x) => x + 1);
```

This method will create a new array as well.

You can find the last index a value occurs in the array with the `lastIndexOf()` function. This will return -1 if the value is not found in the array.

## String Methods

To combine strings you would use the `concat()` method.

```javascript
let s1 = "hello ";
let s2 = "world";

s1.concat(s2);
```

To convert a string into an array, use the `split()` method. This accepts a character, and will split based on that character.

```javascript
let results = "Hello, world!";
let arr_result = results.split(" ");
```

To converting an array into a string, use the `join()` method.

```javascript
let letters = ["a", "b", "c", "d"];
let x = letters.join("-");
```

You can use the `join()` method with a character as well that will be placed in between the array elements.

You cna use the `indexOf()` method to find the index of the first occurence of a substring. It returns the index of the first character of the substring once found. When it can't find the index it returns `-1`.

Another similar method is the `search()` method. It also returns -1 if the substring is not found.

```javascript
let string = "hello world";
index = string.indexOf("lo w");
search_index = string.search("lo w");
```

The benefit of search is that it will accept a regex pattern as input, whearas indexOf just takes a string. IndexOf is a faster way to search, but if you need to look for a pattern, you should use the `search()` method.

There's also a `lastIndexOf()` method that returns the starting index of the last occurence of the substring in the string passed in.

There's also a `charAt()` method that can find the character at a given index. If the index given is out of the range of the string, it will return an empty string.

To create substrings you can use the `slice()` method, which takes in two indices, a start and end index and makes the characters in between the two indices a new string. This does not alter the first string. If you leave out the second index, it will retain all the letters from teh start index to the end index. The end index is not included in the substring created.

To replace parts of a string, you can use the `replace()` method, which accepts two arguments: one string to look for in the string passed in, and one string to replace that string with. This method creates a new string, so its important to note that the output from replace must be stored to retain the updated string. If the substring passed in is not within the original string, the replacement doesn't happen, and the original string is returned. Also, this method only changes the first occurrence of the substring by default. There is a `replaceAll()` method that can replace all occurrences of the substring.

To capitalize all letters in a string, use the `toUpperCase()` method, and to lower use the `toLowerCase()` method. to captilize the first letter of a string, you need to chain these string methods together to find the index of the first letter and then use toUpperCase and that letter by itself, then concatenate the rest of the lowercase string to this upper case letter.

There are methods to check what letters a string starts or ends with, called `startsWith()`, `endsWith()`, respectively.

## Number Methods

To check if something is not a number, use the `isNaN()` method. This returns a boolean value, true if the input is not a number, and false if the input is a number. Usually, you may want to negate this function to get the opposite results; you can do this with `!isNaN(x)` as a condition.

However, a number in quotations will still be considered a number when evaluated with this function.

To check if something is finite, use the `isFinite()` method. This returns a boolean value, false for NaN, Infinity, and undefined, and true for all other values.

To check if an variable is an integer, use the `isInteger()` method. This returns a boolean value, true if the input is an integer, false if the input is not an integer.

To specify a number of decimal places, use the `toFixed()` method. This takes in an integer which is the number of decimal places to print. Also, this doesn't change the original value.
