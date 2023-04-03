const fs = require("fs");
const { format } = require("node:path/win32");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split('\n')

let n = Number(input[0])
let arr = input[1].split(' ').map(Number)


function isPrime(n) {
  let cnt = 0;
  if (n === 1) return false
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) cnt++
    if (cnt > 1) return false
  }
  return true
}
let ans = 0
for (const x of arr) {

  if (isPrime(x)) ans++
}
console.log(ans)

