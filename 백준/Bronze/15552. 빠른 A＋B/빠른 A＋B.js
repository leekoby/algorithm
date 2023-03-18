const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n')

let testCase = Number(input[0]);
let answer = '';



for (let i = 1; i <= testCase; i++) {
  let data = (input[i] || '').split(' ')
  let a = Number(data[0]);
  let b = Number(data[1]);

  answer += a + b + '\n';

}

console.log(answer);