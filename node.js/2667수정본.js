const { DefaultSerializer } = require("v8");


let [width, ...input] = require("fs")
.readFileSync("./dev/stdin")
.toString()
.split("\n");

input = input.map((v) => {
    v = v.split("").map((k) => Number(k));
    return v;
})

let answer = 0; //단지수
const homes = []; //단지 내 가구 수
let homeSize = 0; //가구 사이즈

//단지부터 확인

//움직일 수 있는 동서남북좌표
const dx = [1,0,-1,0];
const dy = [0,-1,0,1];

//탐색:x,y좌표를 기준으로 갈 수 있는 곳 = 동서남북의 4로 고정
function DFS(x,y){
  for(let i =0; i<4;i++){
    const nx = x+dx[i];
    const ny = y+dy[i];
    if(nx>=0&&ny>=0&&nx<width&&ny<width){
      //-좌표 없애기
      //1인 곳만 탐색
      if(input[ny][nx]===1){
        //탐색 끝나면
        homeSize++; //가구 수 증가
        input[ny][nx] = 0; //0으로 바꾸고
        DFS(nx,ny);//다음 좌표로 이동

      }
    }
    
  }
}
//배열에서 1로 시작하는 부분을 탐색
for(let i = 0; i<width;i++){ //x
  for (let k = 0; k<width;k++){ //y
    if(input[i][k]===1) {
      homeSize = 1; //가구 수 증가
      input[i][k] =0; //재방문 방지
      answer++; //단지 수 증가
      DFS(k,i); //재탐색
      homes.push(homeSize);

    }
  }
}
homes.sort((a,b)=>a-b);

console.log(answer);
console.log(homes.join("\n"));
//console.log(input) ->오류시 확인
