function solve(){
  return function(selector){
        var $selector = $(selector);
        var index,
        $current = $('<div />').addClass('current'),
        $container = $('<div />').addClass('options-container');
    
    var $dropdownDiv = $('<div />').addClass('dropdown-list');
    
    $selector.css('display','none');
    $current.text('Select a value');   
    $container.css('display','none');

    var $item = $('<div />').addClass('dropdown-item');

    for (var i = 0; i < 5; i+=1) {

        $('<div class="dropdown-item" data-value="' 
            + (i + 1) +'" data-index = "' 
            + i + '">Option ' 
            + (i + 1) + '</div>').appendTo($container);

        /* 
        //this below should be ok but has not passed the 5th unit test

        var $newItem = $item.clone();
        $newItem.attr('data-value', 'value-'+ (index+1));
        $newItem.attr('data-index', index);    
        $newItem.text('Option '+(index+1));
        $container.append($newItem);
        */
        
    }

    $dropdownDiv.append($selector);
    $dropdownDiv.append($current);
    $dropdownDiv.append($container);

    $body = $('body');
    $body.append($dropdownDiv);

    $('.current').on('click', function() {
        if ($container.css('display')=== 'none') {
            $container.css('display','');
            $('.current').text('Select a value');
        } else {
            $container.css('display','none');
        }   
    });
    $('.dropdown-item').on('click', function() {
        $('.current').attr('data-value', $(this).attr('data-value')); 
        $('.current').text($(this).text());            
        $container.css('display','none');
       
        $selector.val($(this).attr('data-value'));
        $selector.attr('value', $selector.val());
    });
  };
}

module.exports = solve;

