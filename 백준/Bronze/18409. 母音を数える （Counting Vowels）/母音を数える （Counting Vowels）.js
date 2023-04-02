const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, input] = fs.readFileSync(filePath).toString().trim().split('\n');

let vowel = ['a', 'i', 'u', 'e', 'o']
let answer = 0;

for (const x of input) {
  vowel.indexOf(x) > -1 ? answer++ : ''
}
console.log(answer)