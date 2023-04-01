const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number)

// let n = Number(input[0]);

console.log(input.sort((a, b) => a - b).join(' '))