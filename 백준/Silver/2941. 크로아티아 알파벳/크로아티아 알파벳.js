const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim()
let croalpha = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']

function solution(input) {
  for (let alpha of croalpha) {
    input = input.split(alpha).join("@")
  }
  return input.length
}
console.log(solution(input))
