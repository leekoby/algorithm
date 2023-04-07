const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')
let [N, K] = input.shift().split(' ').map(Number)
let coinValue = input.map(Number)


let count = 0;
let idx = coinValue.length-1;
while (K > 0) {
  count += parseInt( K / coinValue[idx])
  K = K % coinValue[idx]
  idx--;
}

console.log(count)