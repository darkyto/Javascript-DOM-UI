function solve(){
  return function(selector){
        var $selector = $(selector);
        var index,
        $current = $('<div />').addClass('current'),
        $container = $('<div />').addClass('options-container');
    
    var $dropdownDiv = $('<div />').addClass('dropdown-list');
    
    $selector.css('display','none');
 
    $current.text('Option 1');
    
    $container.css('display','none');

    var $item = $('<div />').addClass('dropdown-item');

    for (index = 0; index < 5; index+=1) {
        var $newItem = $item.clone();
        $newItem.attr('data-value', 'value-'+ (index+1));
        $newItem.attr('data-index', index);    
        $newItem.text('Option '+(index+1));
        $container.append($newItem);
    }

    $dropdownDiv.append($selector);
    $dropdownDiv.append($current);
    $dropdownDiv.append($container);

    $body = $('body');
    $body.append($dropdownDiv);

    $('.current').on('click', function() {
        $container.css('display','');
        
    });
    $('.dropdown-item').on('click', function() {
        $('.current').attr('data-value', $(this).attr('data-value')); 
        $('.current').text($(this).text());            
        $container.css('display','none');

        // this is working by description but not passing the test...
        $selector.val($(this).attr('data-value'));
        $selector.attr('value', $selector.val());
        console.log($selector.val());
    });
  };
}

module.exports = solve;

