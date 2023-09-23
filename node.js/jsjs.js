let [width, ...input] = require("fs")
.readFileSync("./dev/stdin")
.toString()
.split("\n");

input = input.map((v) => {
    v = v.split("").map((k) => Number(k));
    return v;
})

function solution(n,graph){
    const dx =[1,0,-1,0];
    const dy =[0,-1,0,1];
    const width = graph[0].length; // 그래프 너비
    const height = graph.length; //그래프 높이
    let size = 0; //가구 수를 저장할 변수 초기화

    function DFS(x,y){
        if(x<0 ||x>=n||y<0||y>=n){
            return
        }
        if(graph[x][y]===1){
            size++;
            graph[x][y]===0
            for(let i = 0; i<4;i++){
                DFS(x+dx[i],y+dy[i])
            }
            return 1
        }
        for (let i = 0; i<n;i++){
            for (let j = 0; j<n;j++){
                if (DFS(i,j) ===1){
                    answer.push(size)
                }
                size = 0;
            }
            return answer;
        }
    }
    DFS(input[0][0],input[0][0])
}
solution(width,input);
answer.wort((a,b)=>a-b);

console.log(answer.length);
console.log(answer.join("\n"));

    