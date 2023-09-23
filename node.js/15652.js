let input = require('fs').readFileSync('./dev/stdin').toString().split(" ").map(v=>Number(v)); /*node.js*/
let n = input[0]
let m = input[1]
function solution(n,m) { //입력받은 값을 매개변수로 사용
    const temp = []; //빈 배열 만들기
    const result = []; //결과값 활용

    function DFS(s,L) { //L = LEVEL  
        if(L===m) { //2레벨까지 가지 뻗기 (모:단계 출발점)
            result.push(temp.join(" "));
        }else{ //단계 충족하기 위해
            for(let i = s;i<=n;i++){
                temp.push(i);
                DFS(i,L+1);
                temp.pop();
            }
        }
    }DFS(1,0); //함수가 끝나는 지점에서 함수 호출, 중복되지 않기 위해 초기화한 배열 안의 첫 값에서부터 시작(레벨 트리 이해)
    return result.join("\n");
}
console.log(solution(n,m))