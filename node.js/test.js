let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n'); //인코딩방식, 입력받은 배열 enter기준 나누기

let [n, m] = input.shift().split(' ').map(Number); //입력받은거 나누고 숫자로 변환
let str = input.shift().split(' '); //입력 받은 문자열 띄워쓰기 기준 나누기
const solution = (n, str) => { //solution 함수의 매개변수로 n과 str을 취함
  str.sort(); //정렬
  let answer = []; //최종 출력 값을 저장하는 배열
  let checked = new Array(str.length).fill(0); //중복 제거용 배열
  let temp = []; //시도된 값 저장할 배열

  const dfs = (L, count) => { //깊이 우선 탐색 함수 매개변수로 level의 l, 횟수 count 취함
    if (count === n) { // 횟수가 요구하는 길이랑 같아지면
      answer.push(temp.join('')); // 최종 값 추가
    } else { // 그렇지 않으면
      for (let i = L; i < str.length; i++) { // 레벨부터 문자열 입력받은 길이까지 더해가면서 반복
        if (!checked[i]) { // 레벨트리가 채워지지 않은 상태일 경우
          checked[i] = 1; //추가
          temp.push(str[i]); // 값 추가
          dfs(i, temp.length); // 재귀함수 불러오기
          temp.pop();// 빼내기
          checked[i] = 0; // 초기화
        }
      }
    }
  };
  dfs(0, 0); //함수 호출
  const moeum = ['a', 'e', 'i', 'u', 'o']; //모음 배열 초기화
  let result = []; // 결과값 저장할 배열 저장
  for (let x of answer) { // 최종 결과값동안
    let M = x.split('').filter((e) => moeum.includes(e)).length; // 구글링 부분
    if (M >= 1 && x.length - M >= 2) { //모음이 1개 이상, 자음이 2개 이상
      result.push(x); // 최종 결과값에 집어넣기
    }
  }
  return result.join('\n'); //값을 enter해 리턴
};

console.log(solution(n, str)); //함수 호출