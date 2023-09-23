let input = require('fs').readFileSync('./dev/stdin').toString(); /*node.js*/

input = input.split("\n").map(v=>Number(v)); //첫째줄에 수의 개수 입력받기
/*
입력기 위해 변수 생성 
클래스 함수 split으로 입력받은 수를 띄어쓰기 기준으로 나눔
**python과 달리 split 기본형이 없기 때문에 항상 설정해야함**
한꺼번에 입력 수를 받기 위한 클래스 함수 map
문자열 형태로 입력받은 수를 숫자로 return하는 익명함수 =>
*/
input.shift(); //맨 앞에 있는 원소를 빼서 리턴, 수의 개수

input.sort((a,b)=>a-b); //오름차순 정렬

for (i = 0;i<input.length;i++) {
    console.log(input[i]);
}
//한 줄씩 정렬된 숫자 출력