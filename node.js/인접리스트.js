function solutio(N, input) {
    let answer = Number.MAX_SAFE_INTEGER; //
    
    const check = Array.from({length:N+1}, ()=>0); //
    const graph = Array.from({length: N+1}, ()=>
        Array.from({length:N+1}, ()=>0)
    );
    
    for (let i = 0; i < graph[vertices].length; i++){
        const A = input[i][0];
        const B = input[i][1];
        const cost = input[i][2]; //가중치

        graph[A].push([B, cost]);
        graph[B].push([A, cost]);

    }
    console.log(graph);

    function DFS(vertices, sum) {
        if(vertices === N) {
            answer = Math.min(answer,sum);
        }else{
            for(let i = 0;i<graph[vertices].length;i++){
                const next = graph[vertices][i][0];
                if(check[next]===0) {
                    check[next] = 1;
                    DFS(next,sum+graph[vertices][i][1]);
                    check[next] = 0;
                }
            }
        }
    }
}
console.log()