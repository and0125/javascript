# Dynamic Element Manipulation using the Document Object Model (DOM)

## Traversing the DOM

To create a dynamic webpage your Javascript skills need to be connected to the understanding of the DOM.

You can interact with elements in the DOM using the `document` object seen in the previous chapter.

As a refresher, you will inspect the DOM using the inspect panel on the website, going to the console tab of the inspect panel, and writing in commands to that console, like `console.dir(document);`. This command returns the whole document object for the webpage, but you can use the dot operator to get more specific elements from the DOM.

To get further down the HTML tree of elements, there are two ways to use the dot operator. One way is with the `children` property, which returns the children of a named element of the html tree as key-value pairs.

```Javascript
console.dir(document.body.children.forest.children.tree2....); // see the HTML on page 226 for reference
```

This example shows how to use the dot operator with the children property.

The second way to do this is with an array of the children, as childNodes:

```Javascript
console.dir(document.body.childNodes[3].childNodes[3].childNodes[0]); // see the HTML on page 226 for reference
```

This second method reduces what you write to reference each child, but requires you to know the index of each child, which can involve more back and forth to make sure you are querying the right element.

These two methods can also be combined together as well:

```Javascript
console.dir(document.body.childNodes[1].children.treasure); // see the HTML on page 226 for reference
```

The best way to do this is is use-case dependent.

There is also a `parentElement` property to move back up the HTML tree:

```Javascript
document.body.children.forest.children.tree2.parentElement; // this would return `forest` since that's the parent
```

There are also methods to scroll through siblings: `previousElementSibling` and `nextElementSibling`.

There is also a `nextSibling` property which will return the next sibling of any type, rather than the next node that is an element.

## Selecting Elements as objects

Once you traverse to an object, you can start to change properties of that object. So you can use the traversal path with the dot operator instead of just printing the DOM element with `console.dir()`.

You can change the innerText of an element with the `innerText` property, which focuses on the text between the opening and closing tags of the element.

So if an element was `<p id='greeting'>Hi</p>`, you could adjust the innerText of this element with:

```javascript
document.body.children.greeting.innerText = "Bye!";
```

This property assumes you are not adjusting the HTML, and returns the new text within the same element tags.

You can adjust the HTML of the object using the `innerHTML` property:

```javascript
document.body.children.greeting.innerHTML = "<b>Bye!<b>";
```

Which will adjuste the text and the HTML.

## Accessing Elements in the DOM

The example in the `Selecting Elements` section shows that there are other ways to access DOM elements:

- getting elements by ID
- getting elements by Tag
- getting elements by Class Name
- getting elements by CSS selector

### Getting Elements by ID

This can be performed by the `getElementsByID` method: `document.getElementsByID('two')`, which would return the element with id `two`.

This method will only return the first element with this ID, so it's important to have unique IDs in the HTML.

### Getting Elements by Tag Name

Similarly, this method is `getElementsByTagName()`, which can be used like: `document.getElementsByTagName("div")`.

This method will return a collection of HTML elements, which is a list of nodes.

To traverse this collection, you can use either the index of the collection: `document.getElementsByTagName("div").item(1)`.

Or, you can traverse the collection with the namedItem method: `document.getElementsByTagname("div").nameditem("one")`.

Both of these options return the same element.

Also, the `getElementsByTagName()` method will not return a collection of HTML elements if there is only one element in the HTML document with the tag searched for.

### Getting Elements by Class Name

There is also a method for getting elements by class names that will return a collection of HTML elements: `document.getElementsByClassName('example')`.

### Getting Elements by CSS Selector

This method has a different syntax than the other methods. This would look like: `document.querySelector("div")`. it returns the first div element.

This query select works with all the valid identifiers: elements, classes, and id values. So:

- document.querySelector('p'): returns all elements with the tag p (element tag)
- document.querySelector('p.example') returns all elements in p with the class example (class name)

## Element Click Handler

HTML elements have the ability to perform a function when they are clicked. This is because JavaScript can be connected to an HTML element. This is done with the `onclick` property, and that property is added within the HTML opening tag of the element.

This property can be used in two ways:

- the Javascript function can be written in-line (`onclick=alert('Ouch!')`) or
- the Javascript can be written inside script tags and referenced (`onclick=stop()`)

With bigger functions, the second option is more practical.

The HTML element can also refer to scripts that get loaded into the page as well, by using the document selector from the console. This is useful, but the function will be lost once the page is re-loaded.

### Onclick and the DOM

There is a `this` keyword that can be used in HTML with the DOM. `This` is like `self` in python -- it refers to the HTML element the line of code is written in.

For example:

```html
<script>
  function reveal(el) {
    console.log(el);
  }
</script>
<button onclick="reveal(this)">Click Here!</button>
```

The sample above logs the element it is in, which is the button element, to the console.

There are other methods you can use with the `this` keyword, for example:

- parentElement: gets the parent element of `this` element
- innerText: outputs the inner text of the element

And several other methods like the one's previously seen.

## Manipulating Element Style

After selecting an element from the DOM, you can use CSS to create a style to apply to the element.

You can use CSS to do various things to style elements, including hiding elements, which can be done by setting the `dsiplay` property of the element to `none`.

This styling can be added in directly within a javascript script block, but is more commonly stored in a separate file.

You do a lot with the element styling when you understand how to reference different parts of the HTML with the Javascript. An example loops through several `div` elements with different id attributes that all have different colors, and set the background color of each `div` to the id color to create a rainbow.

## Changing the Classes of an Element

HTML elements also have classes and you can select elements by the name of the class. Classes are used a lot for giving elements a certain common layout using CSS.

You can use JavaScript to change the class of an element, which may trigger the change of layout as specified in the CSS file.

### Adding Classes to Elements

One useful thing to know is how to add a class to an HTML element. This can be done in Javscript by using the `classList.add()` method:

```javascript
function disappear() {
  document.getElementById("shape").classList.add("hide");
}
```

including this in a script block in an HTML file will allow you to:

- go to the class list of a given element (in this case the elements with id equal to "shape")
- Get the class list property of that element
- Add "hide" to the class list.

Adding "hide" to the class list then alters which CSS layout applies to the element (see the example code on pg. 244), which will cause the altered elements to disappear.
