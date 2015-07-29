/* globals $ */
/* 
Create a function that takes an id or DOM element and:
*/
function solve() {
    return function(selector) {
    	var i,
    	    idSelector = selector,
    	    domElement,
    	    allButtonElements,
    	    allContentElements,
    	    len;

    	if (selector == null) {
    		throw Error();
    	}

    	if (typeof(selector) !== 'string') {
    		throw Error();
    	}

    	if (selector instanceof HTMLElement) {
    		idSelector = selector.id;
    	}

    	domElement = document.getElementById(idSelector);
    	if (domElement === null) {
    		throw Error();
    	}

    	allButtonElements = document.querySelectorAll('.button');
    	allContentElements = document.querySelectorAll('.content');

    	len = allButtonElements.length;
    	for (i = len - 1; i >= 0; i-=1) {
    		allButtonElements[i].innerHTML = 'hide';
    	}
    	
    	var root = document.getElementById('root');
    	root.addEventListener('click', toggleElements, false);

    	function toggleElements(ev) {
			if (ev.target.className === 'button') {
				var target = ev.target;
				var next = target;

			    while(next)	 {
					if (next.className === 'content') {
						break;
					}
					next = next.nextElementSibling;
				}

				if (next.style.display === '') {
					target.innerHTML = 'show';
					next.style.display = 'none';
				} else if (next.style.display === 'none') {
					target.innerHTML = 'hide';
					next.style.display = '';
				}			
			}
		}
    };
}

module.exports = solve;
