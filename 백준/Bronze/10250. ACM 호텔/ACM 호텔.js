const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split('\n')

let n = Number(input[0])
let arr = []

for (let i = 1; i < input.length; i++) {
  arr.push(input[i].trim().split(' ').map(Number))
}

let answer = '';

for (let i = 1; i <= n; i++) {
  [H, b, N] = input[i].split(' ')

  let answerH = N % H;
  if (answerH === 0) {
    answerH = H;
  }

  let answerW = Math.ceil(N / H);
  answerW < 10 ? (answerW = String(0) + answerW) : answerW

  answer += `${answerH}${answerW}` + "\n";
}

console.log(answer);


