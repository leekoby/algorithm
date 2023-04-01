const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')

let n = Number(input[0]);
let arr = [];

for (let i = 1; i <= n; i++) {
  //각 사람의 (나이,이름) 정보를 입력 받기
  let age = Number(input[i].split(' ')[0]);
  let name = input[i].trim().split(' ')[1];
  arr.push([age, name])
}
arr.sort((a, b) => a[0] - b[0]);//node.js 의 정렬은 기본적으로 stable

let answer = '';
for (const x of arr) answer += x[0] + ' ' + x[1] + '\n'
console.log(answer)