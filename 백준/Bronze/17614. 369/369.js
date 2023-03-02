const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let n = +fs.readFileSync(filePath).toString().trim()
// console.time('code_measure');
let answer = 0;
function getClapNum(num) {
  let cnt = 0;
  let temp = num;
  let rest = temp % 10;
  while (rest >= 1) {
    if (rest < 10 && (rest % 3 === 0 || rest % 6 === 0 || rest % 9 === 0)) {
      cnt++

    }
    temp = temp / 10
    rest = temp % 10
  }
  return cnt
}

for (let i = 1; i <= n; i++) {
  answer += getClapNum(i)
}
console.log(answer);

// console.timeEnd('code_measure');


