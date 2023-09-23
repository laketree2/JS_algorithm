function solution(graph) {
    let answer = 0; //최대값
    //움직일 수 있는 좌표 만들기
    const dx =[1,0,-1,0];
    const dy =[0,-1,0,1];
    const width = graph[0].length; // 그래프 너비
    const height = graph.length; //그래프 높이
    let islandSize =0; //땅사이즈 계산, 임시저장 변수 초기화

    //const visited = Array.from({length:height}, ()=>Array.from({lenght:width},()=>0));
//좌표 탐색 함수 선언
    function DFS(x,y){
        //배열 좌표 만들기
        for(let i = 0; i<4; i++){
            //다음 좌표
            const nx = x+dx[i];
            const ny = y+dy[i];
            //예외처리:이동 불가-->유효한 좌표 구하기
            if(nx>=0&&ny>=0&&nx<width&&ny<height){
                if(graph[ny][nx] ===1 ){
                    islandSize++;
                    graph[ny][nx] = 0;
                    DFS(nx,ny);
                }
                //x,y좌표가 0이거나, 그래프 너비와 높이에서 벗어났거나
                //무한루프 방지:똑같이 생긴 그래프를 만들고 0으로 채우는 check
                //visited[ny][nx] = 1;
                //DFS(nx,ny);
                //0으로 돌리면 무한루프를 도므로, 되돌려주지 않음

            }
        }
    }
    for (let y =0; y <height;y++){
        for(let x= 0; x < width;x++){
            if(graph[ny][nx]===1){
                islandSize = 1;

                graph[ny][nx] = 0;
                DFS(x,y);

                answer = Math.max(answer, islandSize);
            }
        }
    }
    /*
    dfs탐색 방법
    시작점을 기준으로 1로 표시된 영역을 dfs로 이동하며 탐색
    시작점을 기준으로 한 칸씩 이동할 수 있음(상하좌우의 4개)
    그래프에서 점 이동하듯이 이해(x,y좌표의 배열화)
    x[1,0,-1,0]
    y[0,-1,0,1]

    좌표탐색시 주의할 점
    좌표평면에서의 배열과 배열 자체의 특성에서의 오류
    좌표평면에서의 배열 arr[x][y]
    2차원 배열을 탐색할 때 arr[몇번째줄=y][몇번째요소=x]

    
    */
    return answer;
}

