const fs = require("fs");
const { format } = require("node:path/win32");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split('\n')

const N = Number(input.shift());
let answer = 0;
answer = solution();
console.log(answer);

function solution() {
  for (let i = 1; i <= N; i++) {
    let sum = 0;
    let num = i;
    sum += parseInt(num);
    while (num != 0) {
      sum += parseInt(num % 10);
      num = parseInt(num / 10);
    }
    if (sum === N)
      return i;
  }
  return 0;
}

