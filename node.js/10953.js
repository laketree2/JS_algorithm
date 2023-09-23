let input = require('fs').readFileSync('./dev/stdin').toString().split('\n');
//테스트 케이스 입력받기
for (let i = 1; i <= input[0]; i++) {
    let sp = input[i].split(',');

    console.log(Number(sp[0]) + Number(sp[1]));
}

/*,로 이어진 a,b 나누기
(반복문, 맨 첫번째는 개수이므로 제외)
나눈 수의 첫번째(a)+ 두번째(b)
*/