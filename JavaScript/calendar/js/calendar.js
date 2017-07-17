// Calendar
(function(global, $){
    
    'use strict';
    
    var cal = new Calendar();

    // 생성자 함수 Calendar
    function Calendar() {

        var that = this;
        
        var currentMonth = new Date();
        currentMonth.setDate(1);

        // 초기 실행 함수
        this.init = function() {
            that.renderCalendar();
            that.btnEvent();
        }

        // 달력 UI 생성 함수
        this.renderCalendar = function() {
            
            var arrTable = [];

            arrTable.push('<table><colgroup>');

            for(var i=0; i<7; i++) {
                arrTable.push('<col width="100">');
            }

            arrTable.push('</colgroup>');


            // thead 영역
            arrTable.push('<thead><tr>');
            
            var arrWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

            // 토, 일에 'sat', 'sun' 클래스 추가
            for(var i=0, len=arrWeek.length; i<len; i++) {
                var weekendClass = '';
                weekendClass += i % 7 == 0 ? 'sun' : '';
                weekendClass += i % 7 == 6 ? 'sat' : '';
                arrTable.push('<td class="'+weekendClass+'">' + arrWeek[i] + '</td>');
            }

            arrTable.push('</tr></thead>');
            
            // tbody 영역
            arrTable.push('<tbody>');

            // 달력의 각 칸에 들어가는 날짜
            
            var targetDate = new Date(currentMonth.getTime());
            // 매월 1일이 있는 주의 첫번째 날(일요일)
            // 달력의 첫번째 칸에 들어가는 targetDate

            targetDate.setDate(targetDate.getDate() - targetDate.getDay());

            for(var i=0; i<100; i++) {

                if(i % 7 == 0) {
                    arrTable.push('<tr>');
                }

                var weekendClass = 'date '
                weekendClass += currentMonth.getMonth() != targetDate.getMonth() ? 'not-this-month ' : '';
                weekendClass += i % 7 == 0 ? 'sun' : '';
				weekendClass += i % 7 == 6 ? 'sat' : '';

                arrTable.push('<td class="'+weekendClass+'"><a href="" data-targetdate="' + targetDate + '">' + targetDate.getDate() + '</a></td>') ;
                targetDate.setDate(targetDate.getDate() + 1);
                if(i % 7 ==6) {
                    arrTable.push('</tr>');
                    if(currentMonth.getMonth() != targetDate.getMonth()) {
                        break;
                    }
                }
            }

            arrTable.push('</tbody></table>');

            $('#calendar').html(arrTable.join(""));

            that.changeYearMonth();

        }

        // 버튼 이벤트
        this.btnEvent = function() {
            $('#btnPrev').on('click', that.onPrevCalendar);
            $('#btnNext').on('click', that.onNextCalendar);
        }

        // 이전 버튼
        this.onPrevCalendar = function() {
            currentMonth.setMonth(currentMonth.getMonth() - 1);
            that.renderCalendar();
        }

        // 다음 버튼
        this.onNextCalendar = function() {
            currentMonth.setMonth(currentMonth.getMonth() + 1);
            that.renderCalendar();
        }

        // 달력 이동 시 상단에 현재 년/월 다시 표시
        this.changeYearMonth = function() {
            $('#yearMonth').text(that.getYearMonth(currentMonth).substr(0,8));
        }

        // 날짜 객체를 년/월 문자 형식으로 반환
        this.getYearMonth = function(o) {
            var arrMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var i = o.getMonth();
            return arrMonth[i] + ' ' + o.getFullYear(); 
        }

    }

    cal.init();
    // global.calendar = cal;
    
})(window, window.jQuery);

// Board $ Post
(function(global, $){
    
    'use strict';
    
    // Board
    var day_board = new Board();

    function Board() {

        var $board_link = $('a').on('click', makeBoard);
        // console.log($board_link);

        function makeBoard(e) {
            e.preventDefault();

            var board_html = '';
            var $e_target = $(e.target);

            var post_date = $e_target.data('targetdate');            

            // jQeury 방식
            board_html += '<div class="board-date">'  + post_date.split(' ').slice(1,4).join(' ') + '</div>'
            // DOM 방식
            // board_html += '<div class="board-date">'  + e.target.dataset.targetdate + '</div>'

            board_html += '<button type="button" class="btn-add"><span>add</span></button>'
            board_html += '<ul class="post-list"></ul>'
            $('.board-wrapper').html(board_html);

            $('.board-wrapper').addClass('board-active');

            addList();
        }

    }
    
    // Post    
    function addList() {
      
        $('.btn-add').on('click', function(e) {
            e.preventDefault();
            var $e_target = $(e.target);
            $e_target.next()
            .append('<li class="post-item"><input type="text"><div class="btn-group"><button type="button">save</button><button type="button">modify</button><button type="button">delete</button></div></li>');
            }
        )};

})(window, window.jQuery);