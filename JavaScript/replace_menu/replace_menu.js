(function(global, document, $){

    'use strict';

    function setInHtml(data) {
        var replace_area = $.selector('.replace-area');
        var list_item = data;
        var list_html = '<ul class="replace-list">';

        for(var item, i=0, l=list_item.length; i<l; i++) {
            item = list_item[i];
            list_html += '<li tabindex="0" onclick="choiceItem(this)" class="replace-item">' + item + '</li>';
        }

        list_html += '</ul>'
        replace_area.innerHTML = list_html;
    }

    global.choiceItem = function(target) {
        $.radioClass(target, 'active');
    }

    function bindEvents() {
        var container = $.selector('.input-container');
        var button = $.selector('.btn-input', container);
        button.onclick = replaceListItem.bind(button, container);
    }

    function replaceListItem(container) {
        var input = $.selector('.menu-to-add', container);
        var input_data = input.value.trim();
        var activated = $.selector('.replace-list .active');
        var replace_node = $.createEl('li', input_data);

        replace_node.setAttribute('tabindex', 0);
        replace_node.setAttribute('onclick', 'choiceItem(this)');
        replace_node.setAttribute('class', 'replace-item');

        if(input_data === '') {
            input_data = global.alert('대체할 음료를 입력해주세요.');
        }

        activated = activated || $.addClass($.first($.selector('.replace-list')), 'active');
        $.replaceChild(replace_node, activated);
        input.value = '';
    
    }

    function replaceMenu() {
        var data = '아메리카노 카페라떼 카라멜마키아토 카페모카 에스프레소'.split(' ');
        setInHtml(data);
        bindEvents();
    } 
    replaceMenu();



})(window, window.document, window.utils);