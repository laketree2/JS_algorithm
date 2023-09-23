let input = require('fs').readFileSync('./dev/stdin').toString().split("\n");

const n = input.shift(); //온라인 저지 회원의 수 저장

input.sort((a, b) => parseInt(a) - parseInt(b));
//parseInt:문자를 분석해 정수를 반환함
console.log(input.join("\n"));