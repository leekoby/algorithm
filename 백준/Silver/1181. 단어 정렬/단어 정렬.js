const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')

let n = input[0]
let data = [];

for (let i = 1; i < input.length; i++) {
  data.push(input[i].trim())
}
let arr = [...new Set(data)]
arr.sort((a, b) => {
  if (a.length !== b.length) return a.length - b.length;
  else {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0
  }
});
for (const x of arr) console.log(x);