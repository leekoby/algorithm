const fs = require("fs");
const { start } = require("repl");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')

let n = Number(input[0])
let N = input[1].trim().split(' ').map(Number)
let m = Number(input[2])
let M = input[3].trim().split(' ').map(Number)

let ans = []
let cardMap = new Map();

for (const number of N) {
  if (cardMap.has(number)) cardMap.set(number, cardMap.get(number) + 1);
  else cardMap.set(number, 1)
}

for (const number of M) {
  if (cardMap.has(number)) ans.push(cardMap.get(number));
  else ans.push(0)
}

console.log(ans.join(' '))