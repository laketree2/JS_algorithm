let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n'); //인코딩방식, 나누기

let [n, m] = input.shift().split(' ').map(Number); //입력받은거 나누고 숫자로 변환
let str = input.shift().split(' ');
const solution = (n, str) => {
  str.sort();
  let answer = [];
  let checked = new Array(str.length).fill(0);
  let temp = [];

  const dfs = (L, count) => {
    if (count === n) {
      answer.push(temp.join(''));
    } else {
      for (let i = L; i < str.length; i++) {
        if (!checked[i]) {
          checked[i] = 1;
          temp.push(str[i]);
          dfs(i, temp.length);
          temp.pop();
          checked[i] = 0;
        }
      }
    }
  };
  dfs(0, 0);
  const moeum = ['a', 'e', 'i', 'u', 'o'];
  let result = [];
  for (let x of answer) {
    let M = x.split('').filter((e) => moeum.includes(e)).length;
    if (M >= 1 && x.length - M >= 2) {
      result.push(x);
    }
  }
  return result.join('\n');
};

console.log(solution(n, str));