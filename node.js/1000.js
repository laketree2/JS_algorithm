let input = require('fs').readFileSync('/dev/stdin').toString();

input = input.split(" ").map(v=>Number(v));


console.log(input[0]+input[1]);
