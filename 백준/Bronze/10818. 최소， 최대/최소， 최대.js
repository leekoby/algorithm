const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n')

let testCase = Number(input[0])
let data = input[1].split(' ').map(Number)

console.log(`${Math.min(...data)} ${Math.max(...data)}`)
