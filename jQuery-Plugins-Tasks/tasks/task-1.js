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


    var $options = $selector.find('option');
    $options.each(function(i, element) {
        var $newItem = $('<div />').addClass('dropdown-item');
        $newItem.attr('data-value', $($options[i]).val() );
        $newItem.attr('data-index', i - 1);    
        $newItem.text($($options[i]).text());
        $container.append($newItem);
    });

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

