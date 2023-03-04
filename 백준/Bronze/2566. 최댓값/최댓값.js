const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(x => x.trim().split(' '))

let maxNum = Number.MIN_SAFE_INTEGER
let x = 0;
let y = 0;

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[0].length; j++) {
    if (+input[i][j] > maxNum) {
      maxNum = input[i][j]
      x = i; y = j
    }
  }
}

console.log(maxNum)
console.log(`${x + 1} ${y + 1}`) 