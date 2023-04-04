const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')
let [n, testCase] = input.shift().split(' ')
let list = input.slice(0, n).map(e => e.trim())
let test = input.slice(n, n + testCase).map(e => e.trim())
let monMap = new Map()


for (let i = 0; i < list.length; i++) {
  monMap.set(list[i], i + 1)
}

let answer = ''
for (const x of test) {
  if (Number.isNaN(+x)) {
    if (monMap.has(x)) answer += monMap.get(x) + '\n'
  } else {
    answer += list[x - 1] + '\n'
  }
}

console.log(answer)
