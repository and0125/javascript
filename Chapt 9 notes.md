# The Document Object Model

This is a fundamental concept that is needed to work with JavaScript on web pages. This grabs HTML elements and turns them into a logical tree.

Then there is a browser object model, which holds all the methods and properties for Javascript to interact with the browser. This information is related to previous pages visited, the size of the window, and the document object model.

Working with the DOM will allow you to create interactive web pages.

## HTML Crash Course

HyperText Markup Language is the language that shapes the content of web pages. HTML code consists of elements, which have tags and attributes.

Elements can contain inner elements. You must always close inner elements before closing the outer element. The inner elements are called child elements, and the outer elements are called parent elements.

The elements represent different pieces of layout. Page 209 has comment layout tags.

There are three major elements of an HTML layout: the HTML element, the head element, and the body element.

All other elements are child elements of the HTML element. The head and body elements are the next two top-level elements.

The head element allows you to arrange a lot of things that are meant for the browser and not for the user, like metadata, stylesheet information, search engine to be used, etc.

The body element contains the content that will appear on the webpage. There can only be one body element in the html element.

Any HTML tag can have attributes, which influence the element they are specified on. They are assigned a value with an equal sign. Table 211 has common attributes.

## Browser Object Model

This can also be called the window browser object, but its what makes it possible for your JavaScript code to communicate with the browser.

The window object contains all the properties requreid to represent the window of the browser, like the size of the window and the history of previously visited web pages. The window object has global variables and functions, and these can be seen when we eplore the window object. The exact implementation of the BOM depends on the browser and the version of the browser.

Some important objects of the BOM you can look at are: History, Navigator, and Location.

You can inspect the HTML and JavaScript elements of a web page in the inspection panel. From the console tab, writing the line `console.dir(window)` will show a list of all the properties of the specified object. There are some useful sub-elements of the window object you can view from the console.

- console.dir(window.history): contains the browsing history, and has an inbuilt method to return to the previous page.
- console.dir(window.navigator): contains the information about the browser being used, such as which browser and which version is being used, as well as what OS system the browser is running on.
- console.dir(window.location): contains the URL of the current web page. IF you oververide parts of this property, you will force the browser to go to a new page.

## The Document Object Model

This is the way of displaying the structure of an HTML document as a logical treee. This is possible because of the very important rule that inner elements need to be closed before outer elements are closed.

You can use this idea to map out the structure of the HTML document that could be used to build your website in a graph/diagram. Drawing the tree out can help with understanding and planning work in defining the application.

If you use `console.dir(document)` you can see the document object that represents the DOM of the given web page in the console panel.

The next chapter will focus on traversing the DOM, finding elements in the DOM, and manipulating the DOM. The code we will be writing there will look like real projects.

In order to work with elements on the page, you'll first have to find them in the DOM. To select page elements to use in your code and to manipulate the elmeents, you can use either the `querySelector()` or `querySelectorAll()` method. Both of these can be used to selelct page elements either by tag name, ID, or Class.

The `querySelector()` method will return the first element within the document that matches the specified selectors. The `querySelectorAll()` method will return all the elements matching a query.

The `querySelectorAll()` method will return all the elements in a static NodeList, which represents a list of the document's elements that match the specified group of selectors.

After selecting you can start using the dynamic features of the DOM; you can manipulate the elements using JavaScript. Content can be changed in the same way a variable's contents can be, elements can be removed or added, and styles can be adjusted. This can all be done with JavaScript and the way the user interacts with the page can affect this.
