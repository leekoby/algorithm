const fs = require("fs");
const { format } = require("node:path/win32");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split('\n')
// 문제 풀이
const l = +input[0];
const str = input[1];

let sum = 0;
let r = 1;
for (let i = 0; i < l; i++) {
  sum += ((str[i].charCodeAt() - "a".charCodeAt() + 1) * r) % 1234567891;
  r *= 31;
  r %= 1234567891;
  sum %= 1234567891;
}
console.log(sum);
