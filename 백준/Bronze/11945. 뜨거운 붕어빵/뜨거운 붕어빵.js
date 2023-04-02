const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [x, ...input] = fs.readFileSync(filePath).toString().trim().split('\n')

let [n, m] = x.split(' ')
let ans = '';



for (let i = 0; i < n; i++) {
  for (let j = m - 1; j >= 0; j--) {
    ans += input[i][j]
  }
  ans += '\n'
}

console.log(ans)