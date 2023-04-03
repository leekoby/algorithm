const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(' ')

let [a, b] = input

// 최대공약수
function gcd(minNum, maxNum) {
  return (minNum % maxNum) === 0 ? maxNum : gcd(maxNum, minNum % maxNum);
}
// 최소공배수
function lcm(minNum, maxNum) {
  return minNum * maxNum / gcd(minNum, maxNum);
}

console.log(gcd(a, b))
console.log(lcm(a, b))