//모든 요소의 값을 빼거나 더해 타겟 넘버와 일치하는 개수를 구하는 문제
function solution(numbers, target) {//숫자와 타겟넘버를 매개변수로 함
    let answer = 0; //숫자 셀 값
    
    function DFS(L,sum){ //L:재귀함수를 호출할 때, 레벨 트리 단계를 지정(중단점 지정-->INDEX역할) SUM:숫자들의 합을 인수인계
        if(L ===numbers.length){ //배열의 길이가 같아지면
            if(sum ===target) answer++;//원하는 값일때 증가
        }else{//그렇지 않으면
            DFS(L+1,sum+numbers[L]); //숫자를 더해 계산
            DFS(L+1,sum-numbers[L]); //위가 끝나면 계산
        }
    }
     DFS(0,0); //시작점 호출
    
    return answer; //개수 반환
}

console.log(solution([1,1,1,1,1],3)) //함수 호출