const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')
let [n, m] = input.shift().split(' ').map(Number)
input = input.sort().map(e => e.trim())
let map = new Map();

for (const x of input) {
  if (map.has(x)) map.set(x, map.get(x) + 1)
  else map.set(x, 0);
}

let result = [];
for (const [key, value] of map) {
  if (value > 0) result.push(key)
}

console.log(result.length);
console.log(result.join('\n'))