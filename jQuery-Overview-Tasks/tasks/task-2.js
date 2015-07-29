/* globals $ */

/*
Create a function that takes a selector and:
OK * Finds all elements with class `button` or `content` within the provided element
OK  * Change the content of all `.button` elements with "hide"
* When a `.button` is clicked:
  * Find the topmost `.content` element, that is before another `.button` and:
    * If the `.content` is visible:
      * Hide the `.content`
      * Change the content of the `.button` to "show"       
    * If the `.content` is hidden:
      * Show the `.content`
      * Change the content of the `.button` to "hide"
    * If there isn't a `.content` element **after the clicked `.button`** and **before other `.button`**, do nothing
* Throws if:
  * The provided ID is not a **jQuery object** or a `string` 

  */
  function solve() {
    return function (selector) {

      if (selector == null || typeof(selector) !== 'string') {
          throw new Error('Invalid selector input (not a string)');
      };  

      $.fn.exists = function () {
        return this.length !== 0;
      };

      if ( !($(selector).exists()) ) {
        throw new Error("Not existing selector passed");
      }

      var $buttonElements = $('.button'),
          $contentElements = $('.content');

      $($buttonElements).each(function() {
          $(this).text('hide');
      });

      $(selector).on('click', toggleElements);
      // trigger on the parent elemnent

      function toggleElements(ev) {
        if ($(ev.target).hasClass('button')) {
          var $target = $(ev.target);
          var $nextElement = $target;

          while($nextElement) {
             if ($nextElement.hasClass('content')) {
                break;
             }
             $nextElement = $nextElement.next();
          }

          if ($nextElement.css('display') === 'none') {
             $target.text('hide');
             $nextElement.css('display','');
          } else {
             $target.text('show');
             $nextElement.css('display','none');
          }    
        }
      }

    };
  }

module.exports = solve;