const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')

let n = Number(input[0])

let answer = '';

for (let i = 1; i <= n; i++) {
  const inputs = input[i].split(' ').map(Number);
  answer = i < Number(input[0]) ? answer + `${inputs[0] + inputs[1]}\n`
    : answer + `${inputs[0] + inputs[1]}`;
}

console.log(answer);