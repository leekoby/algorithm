const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [A, B] = fs.readFileSync(filePath).toString().trim().split('\n')

B = B.split('').reduce((a, b) => +a + +b, 0)

console.log(B)


