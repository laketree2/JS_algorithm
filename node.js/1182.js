let input = require('fs').readFileSync('./dev/stdin').toString().trim();

input = input.split("\n");

function solution(numbers, target) {
    let answer = 0; //숫자 셀 값
    
    function DFS(L,sum){
        if(L ===numbers.length){
            if(sum ===target) answer++;
        }else{
            DFS(L+1,sum+numbers[L]);
            DFS(L+1,sum-numbers[L]);
        }
    }
     DFS(0,0);
    
    return answer;
}

console.log(solution([1,1,1,1,1],3))