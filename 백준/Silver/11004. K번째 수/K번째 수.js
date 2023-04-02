const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')

let [n, k] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);
arr.sort((a, b) => a - b);
console.log(arr[k - 1])