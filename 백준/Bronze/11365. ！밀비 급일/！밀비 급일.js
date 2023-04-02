const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let n = fs.readFileSync(filePath).toString().trim().split('\n')

let answer = ''

for (let i = 0; i < n.length - 1; i++) {
  answer += n[i].split('').reverse().join('') + '\n'
}

console.log(answer)