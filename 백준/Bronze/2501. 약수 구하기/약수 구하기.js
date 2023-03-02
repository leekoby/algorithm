const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, k] = fs.readFileSync(filePath).toString().trim().split(' ').map(e => +e)

//어떤 자연수 p와 q가 있을 때,
// 만일 p를 q로 나누었을 때 나머지가 0이면 q는 p의 약수

function isPrime(num, k) {
  let primeArr = []
  let cnt = 0
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      primeArr.push(i)
      cnt++;
    }
    if (cnt === k) {
      return i
    }
  }
  return 0
}

console.log(isPrime(n, k));