let input = require('fs').readFileSync('./dev/stdin').toString().trim().split(" ");

/*첫번째 줄에 있는 정보 (\n)
0번째:응시자수,1번: 수상자수

두번째 줄에 있는 정보:점수( )
내림차순 정렬
수상자수 만큼 잘라서
마지노선 사람의 점수 출력
*/

let one = input[0].split(" ");//첫번째 줄 정보

const test = one[0]; //응시자수
const award = one[1]; //수상자수
let score = input[1].split(" "); //점수

score.sort((a,b)=>b-a); //내림차순

console.log(score[award-1])//