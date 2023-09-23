//answer에 가구수 size를 넣어두고, answer 길이 만큼 = 단지 수를 출력

let [width, ...input] = require("fs")
.readFileSync("./dev/stdin")
.toString()
.split("\n");

input = input.map((v) => {
    v = v.split("").map((k) => Number(k));
    return v;
})
let answer = []; //단지별 아파트 개수를 담는 배열

function solution(graph) {
    //움직일 수 있는 좌표 만들기
    const dx =[1,0,-1,0];
    const dy =[0,-1,0,1];
    const width = graph[0].length; // 그래프 너비
    const height = graph.length; //그래프 높이
    let size = 0; //가구 수를 저장할 변수 초기화
    if(nx>=0&&ny>=0&&nx<width&&ny<height){
        if(graph[ny][nx] === 1){
            DFS(nx,ny);
            answer.push(size);
            size = 0;
        }   
    }

    //좌표 탐색 함수 선언
    function DFS(x,y){
        let answer = 0; //단지수를 추가해줄 변수 초기화
        //배열 좌표 만들기
        for(let i = 0; i<input.length; i++){
            //다음 좌표
            const nx = x+dx[i]; //x좌표
            const ny = y+dy[i]; //y좌표
            //예외처리:이동 불가-->유효한 좌표 구하기
        }
          if(graph[x][y]===1){
            graph[x][y] = 0;
            size +=1;
            for (let m = 0; m<dx.length;m++){
                DFS(x+dx[m],y+dy[m]);
            }
          }  
        }
    DFS(input[0],input[0])
    return answer;
}


answer.sort((a,b)=>a-b);

solution(input);
console.log(answer.length);
console.log(answer.join("\n"));