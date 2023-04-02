const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let n = fs.readFileSync(filePath).toString().trim().split('\n')

let vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
let answer = ''

for (const x of n) {
  let cnt = 0;
  for (const y of x) {
    vowel.indexOf(y) > -1 ? cnt++ : ''
  }
  x !== '#' && (answer += cnt + '\n')
}
console.log(answer)