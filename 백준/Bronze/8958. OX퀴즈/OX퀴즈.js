const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...input] = require("fs").readFileSync(filePath).toString().trim().split("\n");

let ox = input.map(e => e.trim())

let cnt = 0;
let score = 0;
answer = ''

for (let i = 0; i < n; i++) {
  for (let j = 0; j < ox[i].length; j++) {
    if (ox[i][j] === 'X') cnt = 0
    if (ox[i][j] === 'O') cnt++;
    score += cnt
  }
  answer += score + '\n'
  cnt = 0;
  score = 0;
}
console.log(answer)