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
