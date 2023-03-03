const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(e => e.trim().split(' ').map(Number))


for (let i = 0; ; i++) {
  if (input[i][0] === 0 && input[i][1] === 0) break;
  else if (input[i][0] > input[i][1]) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}