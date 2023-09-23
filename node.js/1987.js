//세로 r칸 가로 c칸
//같은 알파벳 지날 수 없음 => set()
//말이 최대로 지날 수 있는 칸 카운팅(시작점 포함)
//위아래보다 좌우가 메모리 사용량 측면에서 더 효율적(메모리의 1차원 저장)
//알파벳을 어떻게 처리하지?
//split("\r") -->linux, 제출 시 삭제

let input = require('fs')
.readFileSync('./dev/stdin').toString().trim().split("\n"); /*node.js*/

const [r,c] = input.shift().split(" ").map((v)=>Number(v)); //세로 r칸 가로 c칸

//2차원 배열 만들기
let graph = input.map(k =>k.split(""))
let alpha = new Set(); //증복 제거한 리스트와 입력값 비교

let answer = 0; //최대값 저장할 변수 선언

//움직일 수 있는 x, y좌표 선언
const dx =[1,0,-1,0];
const dy =[0,-1,0,1];

function DFS(x,y,count) {
    answer = Math.max(answer,count) //최대값
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