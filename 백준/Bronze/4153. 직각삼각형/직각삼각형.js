const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split('\n')

input.pop()
let arr = []

for (const x of input) {
  arr.push(x.trim().split(' ').map(Number).sort((a, b) => a - b))
}

let answer = ''

for (let i = 0; i < arr.length; i++) {
  let a = arr[i][0] * arr[i][0];
  let b = arr[i][1] * arr[i][1];
  let c = arr[i][2] * arr[i][2];

  if (a + b === c) answer += `right\n`

  else answer += `wrong\n`
}
console.log(answer);