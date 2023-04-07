const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')

let [siteN, passN] = input[0].split(' ').map(Number)

let data = []
for (let i = 1; i < input.length; i++) {
  data.push(input[i].split(' ').map(e => e.trim()))
}
let map = new Map();

for (let i = 0; i < siteN; i++) {
  map.set(data[i][0], data[i][1])
}
let ans = []
for (let i = siteN; i < siteN + passN; i++) {
  const key = data[i][0];
  const value = map.get(key);
  ans.push(value)
}

console.log(ans.join('\n'))