function solution(numbers, target) { //숫자와 타겟 넘버 매개변수로 함수 생성
    let answer = 0; //최종 개수 변수 초기화
  
    function DFS(L, sum) { //레벨트리 탐색 함수 생성
      if (L === numbers.length) {//레벨과 길이가 같으면
        let sum = 0;//합 변수 초기화
        for (let i = 0; i < numbers.length; i++) {//반복문
          sum += numbers[i];  //값 더하기
        }
        if (sum === target) { //같아지면
          answer++;//개수 더하기
        }
        return;//리턴
      }
  
      DFS(L + 1,sum);//레벨 하나 증가시키고
      numbers[L] = -numbers[L]; //뺄셈
      DFS(L + 1,sum);//레벨 하나 증가시키고
    }DFS(0,0); //레벨 트리 탐색 함수 호출
    return answer //최종 값 리턴
  }