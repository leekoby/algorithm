const fs = require("fs");
const { off } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(" ").map(Number);

let compareArr = input.slice();

if (compareArr.sort((a, b) => a - b).join(' ') === input.join(' ')) {
  console.log('ascending');
}
else if (compareArr.sort((a, b) => b - a).join(' ') === input.join(' ')) {
  console.log('descending');
}
else {
  console.log('mixed');
}
