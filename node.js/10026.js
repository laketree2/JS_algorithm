/*10026 적록색약
island 풀듯이 구역 나눠서 카운팅하기
적록색약이 구분할 수 있는 구역과
일반인이 구별할 수 있는 구역을 카운팅해서
최종값 출력*/

//입력값 처리
let input = require('fs')
.readFileSync('./dev/stdin').toString().trim().split("\n"); /*node.js*/
const n =  input[0].shift().map((v)=>Number(v));

//2차원 배열 만들기
let graph = input.map(k =>k.split(""))
let check = 


//움직일 수 있는 x, y좌표 선언
const dx =[1,0,-1,0];
const dy =[0,-1,0,1];

function DFS(x,y) {
    
    for(let i =0; i<4;i++){
        const nx = x+dx[i];
        const ny = y+dy[i];
        //좌표 이동
        if(nx>=0&&ny>=0&&nx<c&&ny<r){
            //좌표여부
            if(!alpha.has(graph[ny][nx])){
                alpha.add(graph[ny][nx])
                DFS(nx,ny,count+1);
                alpha.delete(graph[ny][nx])
            }
        }
    }
}
//좌표 시작
alpha.add(graph[0][0]) //시작점 중복 제거하기 위해 일단 넣고 시작
//시작점 카운팅
DFS(0,0,1)
//결과값 출력
console.log(answer)