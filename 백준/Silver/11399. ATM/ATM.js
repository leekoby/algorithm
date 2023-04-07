const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')

const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);

let total = 0;
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  total += sum + arr[i];
  sum += arr[i];
}
console.log(total);
