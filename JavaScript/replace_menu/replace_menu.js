(function(global, document, $){

    'use strict';

    function replaceMenu() {
        var data = '아메리카노 카페라떼 카라멜마키아토 카페모카 에스프레소'.split(' ');
    } 
    replaceMenu();

    function setInHTML(data) {

        var replace_area = $.selector('.replace-area');
                
        var list_item = data;
        var list_html = '<ul class="replace-list">';

        for(var i=0, l=list_item.length; i<l; i++) {
            var item;
            item = list_item[i];
            list_html += '<li tabindex="0" onclick="choiceItem(this)" class="replace-item">' + item + '</li>';
        }

        list_html += '</ul>'
        replace_area.innerHTML = list_html;
    }

    global.choiceItem = function(target) {
        $.radioClass(target, 'active');
    }

    



})(window, window.document, window.utils);