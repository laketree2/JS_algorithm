function solution(n,computers){
    let answer = 0;
    const check = Array.from({length:n},()=>0);
    console.log(check);
    
    function DFS(node){
        for(let i = 0; i<computers[node].length;i++){
            if(computers[node][i]===1&&check[i]===0){
                check[i] = 1;
                DFS(i);
            }
        }
    }
    for(let i = 0; i<n;i++){
        if(check[i]===0){
            answer++;
            check[i] = 1;
            DFS(i);
        }
    }
    return answer;
}

console.log(
    solution(3, [[1,1,0],[1,1,0],[0,0,1]])
)