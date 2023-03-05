const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(a => a.trim())

let n = input.shift();


for (let i = 0; i < n; i++) {
  let stack = [];
  let result = [];
  input[i] = input[i].split(' ')
  for (let j = 0; j < input[i].length; j++) {
    stack.push(input[i][j])
  }

  for (let k = 0; k < input[i].length; k++) {
    result.push(stack.pop())

  }
  console.log(`Case #${i + 1}: ${result.join(' ')}`)
}
