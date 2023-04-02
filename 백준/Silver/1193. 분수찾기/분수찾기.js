const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let n = +fs.readFileSync(filePath).toString().trim()
/*
1/1	1/2	1/3	1/4	1/5	…
2/1	2/2	2/3	2/4	…	…
3/1	3/2	3/3	…	…	…
4/1	4/2	…	…	…	…
5/1	…	…	…	…	…
…	…	…	…	…	…
 */

let add = 0;
let num = 0;

// 1, 2, 3, 4, 5 ... 이런식으로 갯수 규칙이 있었기 때문에
// 반복문으로 우리가 수를 구해야할 라인을 구해준다
for (let i = 1; add < n; i++) {
  num = i;
  if (add + i < n) {
    add += i;
  } else {
    break;
  }
}

// 받은 숫자에서 규칙 라인 전까지의 숫자를 제거하여, 남은 숫자를 구함
let rest = n - add;

// 규칙에 맞게 출력해주면 된다
if (num % 2 !== 0) {
  console.log(`${num + 1 - rest}/${rest}`);
} else {
  console.log(`${rest}/${num + 1 - rest}`);
}