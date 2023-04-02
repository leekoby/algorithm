const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(el => el.trim().split(' '))

let score = {
  'A+': 4.5,
  'A0': 4.0,
  'B+': 3.5,
  'B0': 3.0,
  'C+': 2.5,
  'C0': 2.0,
  'D+': 1.5,
  'D0': 1.0,
  'F': 0.0,
}
let total = [];
let totalClass = 0
for (let i = 0; i < input.length; i++) {

  if (input[i][2] !== "P") {
    total.push(input[i][1] * score[input[i][2]])
    totalClass += parseInt(input[i][1])
  }
}

let sum = total.reduce((a, c) => a + c, 0)
console.log(sum / totalClass)
