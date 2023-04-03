const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [input] = require("fs").readFileSync(filePath).toString().trim().split("\n");

input = input.toUpperCase()

let map = new Map();

for (const x of input) {
  if (!map.has(x)) map.set(x, 1)
  else if (map.has(x)) map.set(x, map.get(x) + 1)
}
let maxWord = ''
let max = Math.max(...map.values())
let cnt = 0;
for (const [key, values] of map.entries()) {
  if (max === values) {
    cnt++
    maxWord = key
  }
}

console.log(cnt <= 1 ? maxWord : '?')