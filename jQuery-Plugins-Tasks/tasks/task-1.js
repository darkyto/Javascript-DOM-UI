function solve(){
  return function(selector){
        var $selector = $(selector);
        var index,
        $current = $('<div />').addClass('current'),
        $container = $('<div />').addClass('options-container');
    
    var $dropdownDiv = $('<div />').addClass('dropdown-list');
    
    $selector.attr('name','the-select');
    $selector.css('display','none');

    $dropdownDiv.append($selector);
  
    $current.attr('data-value','');
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

    $dropdownDiv.append($current);
    $dropdownDiv.append($container);

    $body = $('body');
    $body.append($dropdownDiv);

    $('.current').on('click', function() {
        $container.css('display','');
    });
    $('.dropdown-item').on('click', function() {
        $('.current').text($(this).text());
        $('.current').attr('data-value', $(this).attr('data-value'));
        $selector.val($(this).attr('data-value'));
        console.log($selector.val());
        $container.css('display','none');
    });
  };
}

module.exports = solve;

