const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let a = fs.readFileSync(filePath).toString().trim().split(' ').map(e => e * e).reduce((a, b) => a + b, 0)


// console.time('code_measure');


console.log(a % 10)