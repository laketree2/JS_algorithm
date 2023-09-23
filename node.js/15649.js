/*
임시배열[ ] 하나 선정
루트 선정(중복 없이)
*/

let input = require('fs').readFileSync('./dev/stdin').toString().split(" ").map(v=>Number(v)); /*node.js*/

function solution(n,m) { //자연수 n과 m이 주어짐
    const temp = [];//빈 배열 만들기
    const check = Array.from({length:n+1}, ()=>0); //[0,0,0,0,0] 중복 제거

    function DFS(L) { //L = LEVEL  
        if(L===m) { //2레벨까지 가지 뻗기 (모:단계 출발점)
            console.log(temp.join(" ")); //출력

        }else{ //단계 충족하기 위해
            for(let i = 1;i<=n;i++){
                if(check[i]===0){ //체크가 되어있지 않으면
                    temp.push(i);//배열 맨 마지막에 결과값 넣어주기
                    check[i] = 1; //방문 확인
                    DFS(L+1); //레벨 증가
                    check[i] = 0; //방문 확인 복구(원하는 바 실현 완료)
                    temp.pop(); //결과값 빼기
                }
            }
        }
    }
    DFS(check[0]) //함수가 끝나는 지점에서 함수 호출, 중복되지 않기 위해 초기화한 배열 안의 첫 값에서부터 시작(레벨 트리 이해)
}
solution(input[0],input[1]) //함수 호출(인자값은 받아온 값에서부터)