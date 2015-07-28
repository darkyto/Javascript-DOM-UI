function createImagesPreviewer(selector, items) {
    var container = document.querySelector(selector),
        dfrag = document.createDocumentFragment(),

        mainImageDiv = document.createElement('div'),
        menuDiv = document.createElement('div'),
        elements = document.createElement('div'),
        eachMenuElement = document.createElement('div'),
        elementTitle = document.createElement('span'),
        elementImage = document.createElement('img'),
        mainTitle = document.createElement('span'),
        mainImage = document.createElement('img'),
        searchInput = document.createElement('input'),
        searchTitle = document.createElement('span');
    	len = items.length,
        selectedBox = null;

    styleContainer(container);
    styleMenuDiv(menuDiv);
    styleSearchTitle(searchTitle);
    styleSearchInput(searchInput, 130, 20, 5, 18);

    createMainElement(mainImageDiv);
    createElements(eachMenuElement);

    menuDiv.appendChild(searchTitle);
    menuDiv.appendChild(searchInput);
    menuDiv.appendChild(elements);

    dfrag.appendChild(mainImageDiv);
    dfrag.appendChild(menuDiv);

    container.appendChild(dfrag);

    function onBoxMouseOver(event) {
        if (selectedBox !== this) {
            this.style.background = '#38CED8';
            this.style.border = "1px solid black";
        }
    }

    function onBoxMouseOut(event) {
        if (selectedBox !== this) {
            this.style.background = '';
            this.style.border = "1px solid white";
        }
    }

    function onBoxClick(event) {
        var mainImageDiv = document.getElementById('main-image-container');
        mainImageDiv.firstChild.innerHTML = this.firstChild.innerHTML;
        mainImageDiv.lastChild.src = this.childNodes[1].src;
        // or use LastChild (we have only title (firstChild or childNodes[0]) and img(lastChild or..))
    }

    function onSearch(event) {
        elements.innerHTML = ''; 
        // to delete the old list of elements before creating the new one

        for (var i = 0; i < len; i += 1) {
            var currentElement = eachMenuElement.cloneNode(true),
                title = items[i].title.toLowerCase();
            if (this.value === '' || title.includes(this.value)) {
                currentElement.firstChild.innerHTML = items[i].title;
                currentElement.lastChild.src = items[i].url;
                currentElement.addEventListener("mouseover", onBoxMouseOver, false);
                currentElement.addEventListener("mouseout", onBoxMouseOut, false);
                currentElement.addEventListener("click", onBoxClick, false);
                styleEachMenuElement(currentElement);
                elements.appendChild(currentElement);
            }
        }
    }

    // add inlcudes to prototype if it not exist - important for the search funcitonality
    if (!String.prototype.includes) {
        String.prototype.contains = function() {
            return String.prototype.indexOf.apply(this, arguments) !== -1;
        };
    }

    function createMainElement(selector) {
        styleMainImageDiv(selector);
        styleTitleContent(mainTitle, 360, 40, 30, 36);
        styleImageContent(mainImage, 368, 260, 40);
        selector.appendChild(mainTitle);
        selector.appendChild(mainImage);
        selector.firstChild.innerHTML = items[0].title;
        selector.lastChild.src = items[0].url;
    }

    function createElements(selector) {

        styleTitleContent(elementTitle, 140, 10, 0, 18);
        selector.appendChild(elementTitle);
        styleImageContent(elementImage, 130, 80, 2);
        selector.appendChild(elementImage);
        for (var i = 0; i < len; i += 1) {
            var currentElement = selector.cloneNode(true);
            currentElement.firstChild.innerHTML = items[i].title;
            currentElement.lastChild.src = items[i].url;
            // add event listenrs here
            currentElement.addEventListener("mouseover", onBoxMouseOver, false);
            currentElement.addEventListener("mouseout", onBoxMouseOut, false);
            currentElement.addEventListener("click", onBoxClick, false);
            styleEachMenuElement(currentElement);
            elements.appendChild(currentElement);
        }
    }


    function styleSearchTitle(selector) {
    	selector.innerHTML = 'Filter';
	    selector.style.fontSize = '18px';
	    selector.style.display = 'block';
	    selector.style.width = '160px';
	    selector.style.height = '15px';
	    selector.style.textAlign = 'center';
	    selector.style.marginTop = '5px';
    }

    function styleSearchInput(selector, width, height, topPos, fontSize) {
        selector.style.fontSize = fontSize + "px";
        selector.type = "text";
        selector.style.width = width + "px";
        selector.style.height = height + "px";
        selector.style.marginTop = "3px";
        selector.style.marginLeft = "14px";
        selector.style.position = "relative";
        selector.style.display = "inline-block";
        selector.style.textAlign = "center";
        selector.style.align = "center";
        selector.style.border = "1px solid black";

        selector.addEventListener('change', onSearch, false);
    }

    function styleTitleContent(selector, width, height, topPos, fontSize) {
        selector.style.fontSize = fontSize + "px";
        selector.style.width = width + "px";
        selector.style.height = height + "px";
        selector.style.marginTop = "1px";
        selector.style.position = "relative";
        selector.style.top = topPos + "px";
        selector.style.display = "inline-block";
        selector.style.textAlign = "center";
    }

    function styleImageContent(selector, width, height, topPos) {
        selector.style.width = width + "px";
        selector.style.height = height + "px";
        selector.style.position = "relative";
        selector.style.top = topPos + "px";
        selector.style.margin = "5px";
        selector.style.border = "1px solid black";
        selector.style.borderRadius = "10px";
    }

    function styleEachMenuElement(selector) {
        selector.className = "images-menu";
        selector.style.display = "block";
        selector.style.background = "white";
        selector.style.width = "142px";
        selector.style.height = "115px";
        selector.style.marginLeft = "10px";
        selector.style.marginRight = "10px";
        selector.style.marginTop = "2px";
        selector.style.marginBottom = "2px";
        // selector.style.border = "1px solid black";
        selector.style.borderRadius = "20px";
    }

    function styleContainer(selector) {
        selector.style.margin = "auto 0px";
        selector.style.display = "block";
        selector.style.position = "relative";
        selector.style.background = "#472D44";
        selector.style.width = "590px";
        selector.style.height = "420px";
        selector.style.borderRadius = "20px";
    }

    function styleMainImageDiv(selector) {
        selector.id = "main-image-container";
        selector.style.display = "inline-block";
        selector.style.position = "absolute";
        selector.style.background = "#C7D0C5";
        selector.style.width = "380px";
        selector.style.height = "405px";
        selector.style.margin = "6px";
        selector.style.border = "1px solid black";
        selector.style.borderRadius = "20px";
    }

    function styleMenuDiv(selector) {
        selector.id = "images-menu";
        selector.style.display = "inline-block";
        selector.style.position = "absolute";
        selector.style.left = "385px";
        selector.style.background = "white";
        selector.style.width = "180px";
        selector.style.height = "405px";
        selector.style.margin = "6px";
        selector.style.marginLeft = "10px";
        selector.style.border = "1px solid black";
        selector.style.borderRadius = "20px";

        selector.style.overflowX = "scroll";

    }
}