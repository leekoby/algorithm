const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let n = +fs.readFileSync(filePath).toString().trim()

let answer = ''
for (let i = n; i >= 1; i--) {
  answer += i + '\n'


}
console.log(answer)