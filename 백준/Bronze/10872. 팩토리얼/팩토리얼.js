const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let n = +fs.readFileSync(filePath).toString().trim()
// console.time('code_measure');



function factorial(n) {
  let result = 1
  for (let i = 1; i <= n; i++) {
    result = result * i
  }
  return result
}
console.log(factorial(n))