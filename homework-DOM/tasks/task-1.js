/* globals $ */
/* 

Create a function that takes an id or DOM element and an array of contents

* if an id is provided, select the element
* Add divs to the element
  * Each div's content must be one of the items from the contents array
* The function must remove all previous content from the DOM element provided
* Throws if:
OKK  * The provided first parameter is neither string or existing DOM element
OKK  * The provided id does not select anything (there is no element that has such an id)
OKK  * Any of the function params is missing
OKK  * Any of the function params is not as described
  * Any of the contents is neight `string` or `number`
? ОК    * In that case, the content of the element **must not be** changed   
*/
//module.exports = function () {
// return 
function createPage(element, contents) {
    var i,
        len = contents.length,
        frag = document.createDocumentFragment(),
        newDivElement = document.createElement('div'),
        selectedElement,
        addedDiv;

    if (element === undefined || contents === undefined) {
        throw new Error('missing argument for function createPage(element, contents)');
    }

    if (typeof(element) !== 'string' && !(element instanceof HTMLElement)) {
        throw new Error('element is neither string nor html element');
    }
    if (typeof(element) === 'string') {
        selectedElement = document.getElementById(element);
        if (selectedElement === null) {
            throw new Error('Provided ID not found in any page element!');
        }

        while (selectedElement.firstChild) {
            selectedElement.removeChild(selectedElement.firstChild);
        }

    } else if (element instanceof HTMLElement) {
        selectedElement = element;
        firstChild = selectedElement.firstChild;

        while (selectedElement.firstChild) {
            selectedElement.removeChild(firstChild);
            firstChild = firstChild.nextSibling;
        }
    }

    if (contents.constructor !== Array && contents instanceof 'array') {
        throw new Error('Invalid input at cretePage(..., CONTENTS) - have to be an array');
    }

    if (!contents || contents.some(function(item) {
            return (typeof(item) !== 'string' && typeof(item) !== 'number');
        })) {
        //in that case do not change the content ...
    }

    for (i = 0; i < len; i += 1) {
        addedDiv = newDivElement.cloneNode(true);
        addedDiv.innerHTML = '';
        if (typeof contents[i] === 'string') {
            addedDiv.innerHTML += contents[i];
        } else if (contents[i] instanceof HTMLElement) {
            addedDiv.appendChild(contents[i]);
        } else {
            addedDiv.innerHTML += contents[i];
        }
        frag.appendChild(addedDiv);
    }

    selectedElement.appendChild(frag);
}
// };

createPage('myID', ['<div>abra</div>', 'def', 'hhh', 5]);
var customDiv = document.createElement('strong');
customDiv.innerHTML = 'HA-HA-HA';
customDiv.style.fontSize = '38px';
createPage(document.body.children[1], ['<div>aca da brada</div>', 'John Snow', 'XXX', 252, customDiv]);