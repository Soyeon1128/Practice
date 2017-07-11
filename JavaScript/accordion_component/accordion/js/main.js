'use strict';

(function (global, $) {
    'use strict';

    $('.item').addClass('hide');
    $('.toggle').on('click', toggleList);

    function toggleList(e) {
        var $target_item = $(e.target).parent().next().children();
        if ($target_item.hasClass('hide')) {
            $target_item.removeClass('hide');
        } else {
            $target_item.addClass('hide');
        }
    };
})(window, window.jQuery);