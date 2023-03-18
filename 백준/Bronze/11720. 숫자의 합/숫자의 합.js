const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n')


let testCase = input[0];
let data = input[1].split('').reduce((a, c) => a + Number(c), 0)

console.log(data)