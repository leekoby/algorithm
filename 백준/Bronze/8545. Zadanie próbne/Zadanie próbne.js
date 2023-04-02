const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let n = fs.readFileSync(filePath).toString().trim().split('\n');

console.log(n[0].split('').reverse().join(''))