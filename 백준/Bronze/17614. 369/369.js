const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let n = +fs.readFileSync(filePath).toString().trim()
// console.time('code_measure');
let answer = 0;
function getClapNum(num) {
  let cnt = 0;
  let temp = num;
  while (temp) {
    if (!(temp % 3) | !(temp % 6) | !(temp % 9)) cnt++
    temp = temp / 10
  }
  return cnt
}

for (let i = 1; i <= n; i++) {
  answer += getClapNum(i)
}
console.log(answer);

// console.timeEnd('code_measure');


