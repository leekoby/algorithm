const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// console.log(input);

let [len, num] = input[0].split(' ')
let arr = input[1].split(' ')
let result = arr.filter(el => + el < +num).join(' ')
console.log(result)