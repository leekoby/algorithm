const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number)


input.shift()
input.reverse();
let sight = [];
let max = 0;

for (a of input) {
  if (+a > max) {
    sight.push(a);
    max = a
  }
}

console.log(sight.length)