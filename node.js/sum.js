// 1이상 55이하의 모든 정수를 더한 값을 출력하는 코드
function sumIntegers() {
    let sum = 0; //초기값 작성
    for (let i = 1; i <= 55; i++) { //반복문 조건
      sum += i; //더하기
    }
    console.log("1부터 55까지 모든 정수의 합:", sum); //출력
  }
  
  // 1이상 55이하의 정수 중 모든 5의 배수를 더한 값을 출력하는 코드
  function sumMultiples() {
    let sum = 0; //초깃값 작성
    for (let i = 1; i <= 55; i++) { //반복 조건
      if (i % 5 === 0) { //5의 배수면
        sum += i; //더하기
      }
    }
    console.log("1부터 55까지 모든 5의 배수의 합:", sum); //출력
  }
  
  sumIntegers(); //함수
  sumMultiples();
  