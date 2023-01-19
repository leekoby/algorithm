const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .split(' ')
    .map(el => Number(el));

let chess = [1, 1, 2, 2, 2, 8];


let answer = chess.map((el, idx) => el - input[idx]);
// let result = origin.map((el, idx) => el - input[idx]);
console.log(answer.join(' '))