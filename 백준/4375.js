const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(e => +e);
/*
for (num of input) {
  cnt = 1;
  temp = 1;
  while (true) {
    if (temp % num === 0) {
      console.log(cnt);
      break;
    } else {
      temp = temp * 10 + 1
      cnt++;
    }
  }
}
 */


for (num of input) {
  let cnt = 1;
  let remainder = 1;

  while (remainder % num !== 0) {
    remainder = (remainder * 10 + 1) % num;
    cnt++;
  }

  console.log(cnt);

}