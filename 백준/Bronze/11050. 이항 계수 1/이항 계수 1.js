const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, K] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number)



function factorial(x) {
  let result = 1;
  for (let i = 2; i <= x; i++) {
    result *= i;
  }
  return result;
}

const NKFactorial = factorial(N - K);
console.log(factorial(N) / (NKFactorial * factorial(K)));