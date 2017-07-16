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
            that.renderCal();
        }

        // 달력 UI 생성 함수
        this.renderCal = function() {
            
            var arrTable = [];

            arrTable.push('<table><colgroup>');

            for(var i=0; i<7; i++) {
                arrTable.push('<col width="100');
            }

            arrTable.push('</colgroup>');


            // thead 영역
            arrTable.push('<thead><tr>');
            
            var arrWeek = "일월화수목금토".split("");
            console.log(arrWeek);
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

                var weekendClass = 'date'
                weekendClass += currentMonth.getMonth() != targetDate.getMonth() ? 'not-this-month ' : '';
                weekendClass += i % 7 == 0 ? 'sun' : '';
				weekendClass += i % 7 == 6 ? 'sat' : '';

                arrTable.push('<td class="'+weekendClass+'">' + targetDate.getDate() + '</td>') ;
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

        }

    }

    cal.init();
    
})(window, window.jQuery);