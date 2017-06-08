function waterMelon(n){
  var result = "";
  if(n % 2 === 0) {
    for(var i=0; i<n/2; i++) {
  	 result += "수박"
    }
    return result;
  }
  else if(n === 1) {
  	return "수"
  }
  else {
    for(var i=0; i<(n-1)/2; i++) {
  	 result += "박수"
    }
		return "수" + result;
  }
}

// 실행을 위한 테스트코드입니다.
console.log("n이 1인 경우: "+ waterMelon(1))
console.log("n이 2인 경우: "+ waterMelon(2))
console.log("n이 7인 경우: "+ waterMelon(7))
console.log("n이 10인 경우: "+ waterMelon(10))
console.log("n이 15인 경우: "+ waterMelon(15))