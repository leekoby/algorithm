const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...input] = fs.readFileSync(filePath).toString().trim().split('\n')

let ans = ''

input.forEach((v, i) => ans += `${i + 1}. ${v}\n`)

console.log(ans);