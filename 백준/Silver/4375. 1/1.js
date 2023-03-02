const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(e => +e);


for (num of input) {
  let cnt = 1;
  let remainder = 1;

  while (remainder % num !== 0) {
    remainder = (remainder * 10 + 1) % num;
    cnt++;
  }

  console.log(cnt);
}