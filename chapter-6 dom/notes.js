/* 

difference between window and document

window is the main container or we can say the global Object  and any operations related to entire browser window can be a part of window object
whereas the DOM is the child of window object

all the members like objects, methods or properties if they are the part of window object then we do not refer  the window object. Since window is the global object  so you do not have to write down window

*/



// DOM vs BOM

/* 

The DOM is the Document Object Model, which deals with the document, 
the HTML elements themselves, e.g. document and all traversal you 
would do in it, events, etc

For Example:
change the background color to red
document.body.style.background = "red";


The BOM is the Browser Object Model, which deals with browser components 
aside from the document, like history, location, navigator and screen 
(as well as some others that vary by browser) 

*/



// navigation through DOM

/* 

1: document.documentElement
    returns the Element that is the root element of the document. 

2: document.head
3: document.body

4: document.body.childNodes (include tab, enter and whiteSpace)
  list of the direct children only 

5: document.children (without text nodes, only regular Elements)
6: document.childNodes.length

to check whether an element has child nodes or not
hasChildNodes() 

to find the parent nodes 
document.body.parentNode
document.body.parentElement

to find or access the siblings
document.body.nextSibling
document.body.nextElementSibling
document.body.previousSibling
document.body.previousElementSibling 

*/
