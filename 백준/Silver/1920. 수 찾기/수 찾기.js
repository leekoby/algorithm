const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')

let answer = ''
let n = Number(input[0])
let N = new Set(input[1].split(' ').map(Number))
let m = Number(input[2])
let M = input[3].split(' ').map(Number)

for (const x of M) {
  N.has(x) ? answer += '1' + '\n' : answer += '0' + '\n'
}

console.log(answer)
