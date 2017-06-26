function getDayName(a, b){
  // 각 달의 일수를 별로 배열로 할당
  var monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // 1월 1일이 금요일이므로 총 일수를 7로 나눴을 때 0일경우 목요일, 1일 경우 금요일
  var dayNames = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
  // 해당 월까지 총 합일 수를 계산하는 변수
  var totalDays = 0;
  // monthDays 배열은 0번 부터 시작하기 때문에 a값 감소
  a--;
  while(a--){
    // totalDays에 각 달에 해당하는 일 수를 더해준다.
    totalDays += monthDays[a];
  }
  // 나눈 나머지 값에 해당하는 배열의 원소 반환
  return dayNames[(totalDays+b)%7];
}


// 연습코드

// function getDayName(a,b){
  
//   var array = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   var new_array = [];
//   var new_month = 0;
	
//     for	(var i=0, l=array.length; i<l; i++) {
//         new_month += array[i];
// 		new_array.push(new_month);
//     }

//     if( a === 1 ) {
//         total_days = b;
//     }
//     else if (a === 2) {
//         total_days = new_array[0] + b
//     }
//     else if (a === 3) {
//         total_days = new_array[1] + b
//     }
//     else if (a === 4) {
//         total_days = new_array[2] + b
//     }
//     else if (a === 5) {
//         total_days = new_array[3] + b
//     }
//     else if (a === 6) {
//         total_days = new_array[4] + b
//     }
//     else if (a === 7) {
//         total_days = new_array[5] + b
//     }
//     else if (a === 8) {
//         total_days = new_array[6] + b
//     }
//     else if (a === 9) {
//         total_days = new_array[7] + b
//     }
//     else if (a === 10) {
//         total_days = new_array[8] + b
//     }
//     else if (a === 11) {
//         total_days = new_array[9] + b
//     }
//     else if (a === 12) {
//         total_days = new_array[10] + b
//     }
    
//     var result;

//     if(total_days % 7 === 1) {
//         result = 'FRI';
//     }
//     else if(total_days % 7 === 2) {
//         result = 'SAT';
//     }
//     else if(total_days % 7 === 3) {
//         result = 'SUN';
//     }
//     else if(total_days % 7 === 4) {
//         result = 'MON';
//     }
//     else if(total_days % 7 === 5) {
//         result = 'TUE';
//     }
//     else if(total_days % 7 === 6) {
//         result = 'WED';
//     }
//     else if(total_days % 7 === 0) {
//         result = 'THU';
//     }
    
//     return result;
// };