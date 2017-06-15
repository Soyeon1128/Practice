(function(global, document, _){
 
    'use strict';
    
    var addition = _.selector('.btn-add');
    var input_box = _.selector('.what-to-do');
    var ul = _.selector('.list-to-do');

    addition.onclick = function() {

        var data = input_box.value;        
        if( data === "" ) {
            alert("입력값을 입력하세요.")
            throw ("입력값을 입력하세요.")
        };

        var li = _.createElement('li');
        var label = _.createElement('label');

        var checkbox = _.createElement('input');
        checkbox.setAttribute('type', 'checkbox');

        var text = _.createText(data);
     
        _.appendChild(label, checkbox);
        _.appendChild(label, text);
        _.appendChild(li, label);
        _.appendChild(ul, li);

        input_box.value = "";

        return false;
    };

    var deletion = _.selector('.btn-delete');
    
    deletion.onclick = function() {

        var list_array = _.selectorAll('.list-to-do li', ul)

        for( var i=0, l=list_array.length; i<l; i++) {
            var array_item = list_array[i];
            var list_input = _.selector('input', array_item);

            if( list_input.checked ) {
                ul.removeChild(array_item);              
            }
        };
        
        return false;
    };
    
    var clear_all = _.selector('.clear-all');

    clear_all.onclick = function() {
        var ul_to_delete = _.selector('.list-to-do');
        ul_to_delete.textContent = "";
    };
 


})(window, window.document, window.utils);