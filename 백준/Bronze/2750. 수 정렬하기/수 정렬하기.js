const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...input] = fs.readFileSync(filePath).toString().trim().split('\n').map(Number)

console.log(input.sort((a, b) => a - b).join('\n'))