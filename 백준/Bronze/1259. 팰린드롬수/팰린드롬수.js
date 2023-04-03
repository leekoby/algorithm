const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n").map(el => el.trim());
input.pop()
let answer = ''
for (let x of input) {
  if (String(x) === x.split('').reverse().join('')) answer += 'yes' + '\n'

  else answer += 'no' + '\n'
}

console.log(answer)