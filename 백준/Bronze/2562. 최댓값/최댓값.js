const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(el => +el);

// console.log(input);

let max = Math.max(...input)
console.log(max);
console.log(input.indexOf(max) + 1);


