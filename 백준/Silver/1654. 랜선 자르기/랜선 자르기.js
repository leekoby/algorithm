const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')


const [n, k] = input.shift().split(' ').map(Number);
const lines = input.map(Number).sort((a, b) => a - b);
let right = lines[lines.length - 1]
let left = 1;

while (left <= right) {
  let mid = parseInt((left + right) / 2);
  let howManyPieces = lines
    .map((line) => parseInt(line / mid))
    .reduce((a, b) => a + b, 0);
  if (howManyPieces >= k) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}
console.log(right);