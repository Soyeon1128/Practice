(function(global){
    'use strict';

    var wrapper, diary_storage, diary, diary_buttons, diary_title, diary_image, diary_text, diary_items;

    var document = global.document;
    var forEach = Array.prototype.forEach;
    var diary_api_address = '';
    
    function init() {
        // API 주소
        diary_api_address = '/diary';
        // 변수 설정
        wrapper = document.querySelector('.wrapper');
        diary = wrapper.querySelector('.diary');
        diary_buttons = diary.querySelectorAll('.button');
        diary_items = wrapper.querySelector('.diary-item-container');
        diary_title = diary.querySelector('#title');
        diary_image = diary.querySelector('#image');
        diary_text = diary.querySelector('#text');

        load(); 

        bind();
    }
    function load() {
        // 비동기 통신 API
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = loadCommunication;
        xhr.open('GET', diary_api_address, true);
        xhr.send(null);
       
        function loadCommunication() {
            if ( xhr.status === 200 && xhr.readyState === 4 ) {
                // 서버에서 가져온 데이터를 storage에 참조
                diary_storage = JSON.parse(xhr.response);
                // console.log('1', diary_storage);
                // console.log(Array.isArray(diary_storage));
                render();
            }
        }
    }

    function render() {
        var template = '';
        diary_items.innerHTML = '';
        // console.log('2',diary_storage);
        
        // console.log('3', diary_array);
        
        diary_storage.forEach(function(diary){
            template += '<article class="diary-item">'+
                '<div class="message-header">'+
                '<h5 class="diary-item-title">'+diary.title+'</h5>'+
                '<button data-remove-index="'+diary.id+'" type="button" class="delete" aria-label="메모 아이템 제거">삭제</button>'+
                '</div>'+
                '<div class="message-body">'+
                '<p class="diary-item-content">'+diary.image+'</p>'+
                '<p class="diary-item-content">'+diary.text+'</p>'+
                '</div>'+
                '</article>';
        });
        // console.log(template);   
        diary_items.innerHTML = template;
        // bind();
    }

    function bind() {
        forEach.call(diary_buttons, function(button){
            button.addEventListener('click', detectButton);
            console.log(button);
            
        });
        console.log('bind');
        
        diary_items.addEventListener('click', removeDiary);      
    }

    function detectButton() {
        console.log("detect");
        
        this.classList.contains('is-save') ? saveDiary() : cancelDiary();
    }

    function removeDiary(ev) {
        var target = ev.target;

        if ( target.localName === 'button' && target.classList.contains('delete') ) {
            var remove_id = target.dataset.removeIndex;
        
            diary_api_address = '/diary';        

            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = removeCommunication;
            xhr.open('DELETE', diary_api_address + '/' + remove_id , true);
            xhr.send(null);
         }

        function removeCommunication() {
            load();
        }
        ev.stopPropagation();
    }

    function saveDiary() {
        var diary_item = {
            title: diary_title.value,
            image: diary_image.value,
            text: diary_text.value
        };
        
        diary_api_address = '/diary';    

        var keys = Object.keys(diary_item);
        var values = Object.values(diary_item);
        
        var post_text = JSON.stringify(diary_item);
        
        // 비동기 통신 API
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = saveCommunication;
        xhr.open('POST', diary_api_address, true);
        
        xhr.setRequestHeader("Content-type", "application/json");
        
        xhr.send(post_text);
        
        function saveCommunication() {
            load();
        }
        cancelDiary();
        
    }

    function cancelDiary() {
        diary_title.value = '';
        diary_image.value = '';
        diary_text.value = '';
    }

    init();

})(window);