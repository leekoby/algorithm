const fs = require("fs");
const { format } = require("node:path/win32");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split('\n')

let [line, num] = input[0].split(' ').map(Number)
let arr = input[1].split(' ').map(Number)

let max = -9999;

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    for (let k = j + 1; k < arr.length; k++) {
      let sum = arr[i] + arr[j] + arr[k]

      if (sum > max && sum <= num) max = sum

    }
  }
}

console.log(max)