(function(global, document, _){
 
    'use strict';

    //  <li>
    //      <label for="">
    //          <input type="checkbox">
    //          text
    //      </label>
    //  </li>
    
    var addition = _.selector('.btn-add');
    var input_box = _.selector('.what-to-do');
    var ul = _.selector('.list-to-do');

    addition.onclick = function() {
        
        var li = _.createElement('li');
        var label = _.createElement('label');

        var checkbox = _.createElement('input');
        checkbox.setAttribute('type', 'checkbox');

        var data = input_box.value;
        var text = _.createText(data);
     
        _.appendChild(label, checkbox);
        _.appendChild(label, text);

        _.appendChild(li, label);
        
        _.appendChild(ul, li);

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
    
    var div_to_delete = _.selector('.list-area');
    var ul_to_delete = _.selector('.list-to-do');

    clear_all.onclick = function() {
        div_to_delete.removeChild(ul_to_delete);
    };
 


})(window, window.document, window.utils);