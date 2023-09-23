let input = require('fs').readFileSync('./dev/stdin').toString().trim();

input = input.split("\n");

const N = +input.shift();
/* 무조건 맨 앞에 +를 붙이면 숫자로 변경 가능
단, + 해당이 숫자가 아닌 문자열일 경우, 숫자로 변경 가능한 문자열만 가능*/

const set = new Set(input);

input = [...set];
input.sort((a,b)=> {
    if(a.length ===b.length) a-b|| a.localeCompare(b);
    else return a.length-b.length;
});
console.log(input.join("\n"));


