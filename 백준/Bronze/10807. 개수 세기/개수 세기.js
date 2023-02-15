const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let len = input[0]
let arr = input[1].split(' ')
let num = +input[2]

console.log(arr.filter(el => +el === num).length)