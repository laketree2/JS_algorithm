/*
임시배열[ ] 하나 선정
루트 선정(중복 없이)
오름차순 출력
*/

let input = require('fs').readFileSync('./dev/stdin').toString().split(" ").map(v=>Number(v)); /*node.js*/
let n = input[0]
let m = input[1]
function solution(n,m) { //입력받은 값을 매개변수로 사용
    const temp = [];//빈 배열 만들기
    const check = new Array(m).fill(0); //[0,0,0,0,0] 중복 제거

    function DFS(L,s) { //L = LEVEL  
        if(L===m) { //2레벨까지 가지 뻗기 (모:단계 출발점)
            temp.push(check.join(" "));
        }else{ //단계 충족하기 위해
            for(let i = s;i<=n;i++){
                check[L] = i;
                DFS(L+1,i+1);
            }
        }
    }DFS(0,1); //함수가 끝나는 지점에서 함수 호출, 중복되지 않기 위해 초기화한 배열 안의 첫 값에서부터 시작(레벨 트리 이해)
    return temp.join("\n");
}
console.log(solution(n,m))