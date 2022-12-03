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

## Properties

You can make properties that hold the data of the class outside of the constructor function. This can be useful for not providing direct access to the properties. This is important for validation steps and other situations in which you want to prevent direct access to the property from outside the class.

You can do this with the hashtag symbol when create the class:

```javascript
class Person {
  #firstname;
  #lastname;
}
```

These properties can be set with the constructor function too, but the hashtag makes them impossible to reference from outside the class. This will be useful for validation of the input. They did a silly example, but it could be for making sure a property is of the right type, or of the right length, etc.

## Getters and Setters

These are special properties that can be used to get data from a class and to set data fields on the class. Getters and setters are computed properties. They are more like properties than functions, and are called accessor methods.

accessors start with the `get` and `set` keywords. It is considered good practice to make fields private as much as possible and provide access to them with getter and seeters. That way the property cannot be set from the outside without the object being in control of the data set to the properties. This principle is called encapsulation. The class is said to encapsulate the data when the object is in control of its own fields.

With respect to their names, the `get` accessor gets a property value, and the `set` accessor sets a property value.

Once the setter is created for the private properties, you access them and change them just like they were public, except you can add validation code to the setter to ensure the proper data type and value are set to the property. That is with `instance.property = "new value";`. You would not reference a getter or setter with parentheses, this will cause an error because these aren't functions -- they are properties.

## Inheritance

Inheritance is another key concept of OOP, this means that you can a create class (called a child) from an existing class (called a parent), and the child inherits all of the properties of the parent.

You inherit from a class by using the `extends` keyword:

```javascript
class Vehicle {
  // vehicle class properties and methods
}

class Motorcycle extends Vehicle {
  constructor(color, currentSpeed, maxSpeed, fuel) {
    super(color, currentSpeed, maxSpeed);
    this.fuel = fuel;
  }
  // code unique to the motorcycle class
  // motorcycle class can acccess the properties and methods of the vehicle class
}
```

You use the `super` keyword to reference the values from properties of the parent class (in this case the vehicle class).

Note that this does not work in reverse; the vehicle class cannot access any properties or methods of the motorcycle class (i.e. parents can't access properties of children classes).

## Protoptypes

A prototype mechanism in JavaScript makes it possible to have objects. When nothing is specified when creating a class, the objects inherit from the `object.prototype` prototype. This is a built-in JavaScript class we can use. This is considered the base object, and is always at the top of the inheritance tree for any object. It's always present to be accessed in any class created.

You can use these prototypes to create methods and properties that are meant to be overwritten or customized during implementation. They still act like they are methods and properties for instances of the class, but can be overwritten for certain instances without effecting every instance of the class.

Prototypes should **NOT** be used when you have control over the class code and you want to chagne it permanently. If that's the case, just change the class.

However, you can expand existing objects conditionally.

Also, never overwrite the `Object.prototype` class, because that will affect how your JavaScript installation and compiler works.
