const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');


function isValid(str) {
  if (str.length >= 6 && str.length <= 9) return true
  else return false
}
let answer = ''
for (let i = 0; i < n; i++) {
  if (isValid(input[i].trim())) answer += "yes\n"
  else answer += "no\n"
}
console.log(answer);