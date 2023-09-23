let input = require('fs').readFileSync('/dev/stdin').toString();

input = input.split(" ").map(v=>Number(v));
console.log(input);
// a = input[0];
// b = input[1];
// v = input[2];

// day = (v-b)/(a-b);

// if (day == int(day)){
//     console.log(int(day)); 
// }else{
//     console.log(int(day) + 1);
// }
