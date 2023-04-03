const fs = require("fs");
const { off } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let n = require("fs").readFileSync(filePath).toString().trim().split("\n");

n = parseInt(n)
let answer = ''
for (let i = n; i > 0; i--) {
  answer += '*'.repeat(i) + '\n'
}
console.log(answer)