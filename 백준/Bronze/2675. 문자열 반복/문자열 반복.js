const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n')
let testCase = input[0];
let answer = ''
for (let i = 1; i <= testCase; i++) {
  let str = ''
  let [len, word] = input[i].split(' ')
  word = word.trim().split('')
  for (word of word) {
    str += word.repeat(len)
  }
  answer += str + '\n';
}
console.log(answer)