const fs = require("fs");
const { off } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...input] = require("fs").readFileSync(filePath).toString().trim().split("\n");

let student = input.map(e => e.trim().split(' ').reverse());
let age = []


for (let i = 0; i < n; i++) {
  student[i][0] = Number(student[i][0])
  if (student[i][1] < 10) student[i][1] = '0' + student[i][1];
  if (student[i][2] < 10) student[i][2] = '0' + student[i][2];

  age.push(Number(student[i][0] + student[i][1] + student[i][2]))
}

let min = age.indexOf(Math.max(...age))
let max = age.indexOf(Math.min(...age))

console.log(student[min][3] + '\n' + student[max][3]);