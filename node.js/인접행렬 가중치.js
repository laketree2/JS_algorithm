function solution(input) {
    let answer = Number.MAX_SAFE_INTEGER; //가중치를 저장하는 값
    const check = Array.from({length:6}, ()=>0); //중복 제거

    const graph = Array.from({length: 6}, ()=>
     Array.from({length:6}, ()=>0)
    ); //그래프 빈칸 2차원 배열 형태로 정리
    
    for (let i = 0; i < input.length; i++){
        const a = input[i][0]; 
        const b = input[i][1];
        const cost = input[i][2]; //가중치

        graph[a][b] = cost; //양방형
        graph[b][a] = cost; //양방형

    }
    console.log(graph);
    function DFS(vertices, sum) {
        if(vertices === 5) {
            answer = Math.min(answer,sum);
        }else{
            for(let i = 0;i<6;i++){
                if(check[i]===0&&graph[vertices][i]>0) {
                    check[i] = 1;
                    DFS(i,sum+graph[vertices][i]);
                    check[i] = 0;
                }
            }
        }
    }
}
console.log()