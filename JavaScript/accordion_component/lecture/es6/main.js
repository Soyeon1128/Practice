(function($){
    'use strict';
    
    if ( !$.cache ) {
    $.cache = el => $.data(el, '$el') || $.data(el, '$el', $(el));
  }
    
})(window.jQuery);

(function(global, $){

    'use strict';
    
    let $component,
        $lists,
        $toggle,
        
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

        let $this = $.cache(e.target);
        let $list = $this.parent().next();
        let $activated = $toggle.filter('.is-active');

        console.log($this);
        console.log($list);
        console.log($activated);

        if ( $activated.is($this) ) {
            return;
        }

        $activated.removeClass('is-active');
        $lists.filter(':visible').hide(time);

        $this.addClass('is-active');
        $list.show(time);

    }

    init();

}) (window, window.jQuery);