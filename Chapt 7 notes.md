# Classes

JavaScript classes are templates for creating objects. These classes are what enable object-oriented programming.

## Object-oriented programming

This approach to programming means that the code is structured into objects, and leads to more maintainable and reusable code. This approach makes you think about breaking a system into objects and their interactions.

Classes in JavaScript encapsulate data nad functions that are part of that class. YOu can create a class, and then later create objects using that class.

```javascript
// class creation
class ClassName {
  constructor(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2;
  }
}

// class instantiation
let obj = new ClassName("prop1 value", "prop2 value");
```

You can alternate between the class syntax and defining a function that can do the same thing as a class. This demonstrates that classes are a special type of function in JavaScript, but you should create templates as Classes and not as functions.

Classes reduce the amount of typing needed to create multiple instances of the class, and the function syntax doesn't allot for that.

Also, its convention to start class names with a capital letter.

## Constructors

The constructor method is a special method that is used to initialize objects from the class template.

There can only be one constructor method in a class. This constructor contains the properties that will be set when initiating the class, like above.

You use the `new` keyword to indicate to the compiler to look for the constructor method of hte class and create a new object with the arguments passed in.

If some properties are not given arguments, the JavaScript compiler will make those properties undefined rather than making them null or throwing an error in the creation. To avoid this, just like with functions, you can define default values for the properties of the class just in case.

## Methods

In a class we can create functions. This means our object can start doing things usng the objecst own properties, for example printing a name. Functions in classes are called methods.

You define methods in the brackets for the class, after the constructor method.

Classes can have as many methods as needed, and you can reference the input parameters from the constructor in the functions by using the keyword `this`; for example `this.firstname` returns the first name of this instance.
