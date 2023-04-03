const fs = require("fs");
const { off } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, input] = require("fs").readFileSync(filePath).toString().trim().split("\n");

let [n, m] = N.split(' ')
let base = n * m
let diff = input.split(' ').map(Number)
let answer = ''

for (let i = 0; i < diff.length; i++) {
  answer += `${diff[i] - base}` + ' '
}

console.log(answer);