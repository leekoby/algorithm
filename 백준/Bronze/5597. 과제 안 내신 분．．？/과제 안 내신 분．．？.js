const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(el => +el).sort((a, b) => a - b);

// console.log(input);
let result = [];
for (let i = 1; i <= 30; i++) {
  if (input.indexOf(i) < 0) {
    result.push(i)
  }
}

console.log(result.join('\n'));



