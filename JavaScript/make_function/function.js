// ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
// JavaScript 함수 만들기 실습
// ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
// 1. 두 수를 입력받아 큰 수를 반환하는 함수 function
function max(a, b) {
    if (a < b) {
        return b;
    }
    else {
        return a;
    }
}
console.log('max(20, 25) 함수 결과:', max(20, 25));
// 25
// ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
// 2. 숫자를 입력하면 요일을 반환하는 함수
function day(a) {
    if (a === 0) {
        return "Sunday";
    }
    else if (a === 1) {
        return "Monday"
    }
    else if (a === 2) {
        return "Tuesday"
    }
    else if (a === 3) {
        return "Wednesday"
    }
    else if (a === 4) {
        return "Thursday"
    }
    else if (a === 5) {
        return "Friday"
    }
    else if (a === 6) {
        return "Saturday"
    }
}
console.log('day(4) 함수 결과:', day(4));
// Thursday
// ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
// 3. 짝수, 홀수를 판단하는 함수
function EvenOdd(a) {
    if (a % 2 === 0) {
        return "Even"
    }
    else {
        return "Odd"
    }
}
console.log('EvenOdd(4719) 함수 결과:', EvenOdd(4719));
// Odd
// ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
// 4. 숫자를 배열로 전달받아 숫자들의 평균을 반환하는 함수
function Average(a) {
    var result = 0;
    for (var i = 0; i < a.length; i++) {
        result = result + a[i];
        // result += a[i];
    }
        return result / a.length;
}
console.log('Average(3,8,14) 함수 결과:', Average([3,8,14]));
// 8.333333333333334
// ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
// 5. 문자를 배열로 전달받아 문자열 하나로 반환하는 함수
function oneWord(a) {
//     var w1 = a[0];
//     var w2 = a[1];
//     var w3 = a[2];
//     .
//     .
//     .
//     return w1 + w2 + . . .
    var result = "";
    for (var i = 0; i < a.length; i++) {
        result = result + a[i]    
    }
        return result;
}
console.log('Average("나","비","야","이리","날아","오너라") 함수 결과:', oneWord(["나","비","야","이리","날아","오너라"]));
// ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
// 6. 세 수를 입력받아 큰 수를 반환하는 함수
function max1 (a,b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}
function max2(a,b,c) {
    
    if ( max1(a,b) > c) {
        return max1(a,b);
    }
    else {
        return c;
    }
}
console.log('max2(5,2,7) :', max2(5,2,7));
// ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
// 7. 전화번호를 입력하면 뒤에 4자리를 제외하고 *로 바꾸는 함수
function phoneNumber(a) {
    var b = a.slice(-4);
    var c = '';
    for (var i = 0; i < a.length-4; i++) {
        c = c + "*"
    }
        return (c + b);
}
console.log('phoneNumber(01044400570) :', phoneNumber('01044400570'));
// ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
// 8. Email validation
function validateEmail(email) {
    return email.indexOf('@') > -1;
}
console.log('validateEmail(ksy4334@naver.com):', validateEmail('ksy4334@naver.com'));
// ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
// 9. 비밀번호 문자열 validation (영어문자, 숫자 포함)
function validatePassword(pw){
  var lowCase = 'abcdefghijklmnopqrstuvwxyz';
  var upCase = lowCase.toUpperCase();
  var numCase = '0123456789';
  var lowCheck = false;
  var upCheck = false;
  var numCheck = false;
  if (pw.length >= 8){
    for(var i = 0, l = lowCase.length; i < l; i++){
      if (pw.indexOf(lowCase[i]) !== -1){
        lowCheck = true;
      }
      if (pw.indexOf(upCase[i]) !== -1){
        upCheck = true;
      }
    }
    for(var i = 0, l = numCase.length; i < l; i++){
      if (pw.indexOf(numCase[i]) !== -1){
        numCheck = true;
      }
    }
  }
  if( lowCheck && upCheck && numCheck){
    return true;
  } else {
    return false;
  }
}
console.log('validatePassword("Password11"): ', validatePassword("Password11"));




