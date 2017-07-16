'use strict';

(function ($) {
    'use strict';

    if (!$.cache) {
        $.cache = function (el) {
            return $.data(el, '$el') || $.data(el, '$el', $(el));
        };
    }
})(window.jQuery);

(function (global, $) {

    'use strict';

    var $component = void 0,
        $lists = void 0,
        $toggle = void 0,
        time = 300;

    // 초기화
    function init() {

        // 객체 참조
        $component = $('.category');
        $lists = $('.category-list');
        $toggle = $('.toggle-link');

        // 이벤트 바인딩
        bind();

        // 초기 실행
        $lists.hide();
        // console.log($lists);
    }

    // 이벤트 핸들링
    function bind() {
        $toggle.on('click', toggleList);
    }

    // 이벤트 핸들러
    function toggleList(e) {
        e.preventDefault();

        var $this = $.cache(e.target);
        var $list = $this.parent().next();
        var $activated = $toggle.filter('.is-active');

        console.log($this);
        console.log($list);
        console.log($activated);

        if ($activated.is($this)) {
            return;
        }

        $activated.removeClass('is-active');
        $lists.filter(':visible').hide(time);

        $this.addClass('is-active');
        $list.show(time);
    }

    init();
})(window, window.jQuery);