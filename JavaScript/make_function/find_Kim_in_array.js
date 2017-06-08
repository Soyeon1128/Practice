function findKim(seoul){
  var location;
  if(seoul.indexOf('Kim') > -1) {
  	location = seoul.indexOf('Kim');
  }
  else {
  	"error";
  }
  return "김서방은 " + location + "에 있다";
}

// 실행을 위한 테스트코드입니다.
console.log( findKim(["Queen", "Tod", "Kim"]));


// ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
// 더욱 쉽고 깔끔하게 정리


function findKim(seoul){
  var idx = seoul.indexOf('Kim');
  //함수를 완성하세요

  return "김서방은 " + idx + "에 있다";
}