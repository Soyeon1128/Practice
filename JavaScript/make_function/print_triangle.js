function printTriangle(num) {
    var a = "";
    for(var i=0; i<num; i++){
        for(var j=0; j<=i; j++){
            a = a + "*";
        }
  	    a = a + '\n';
    }
    return a;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( printTriangle(5) );
console.log( printTriangle(10) );