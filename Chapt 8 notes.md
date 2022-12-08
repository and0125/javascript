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
