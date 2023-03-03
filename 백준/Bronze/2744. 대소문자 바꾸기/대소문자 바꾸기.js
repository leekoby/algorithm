const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim()

let s = ''
for (let i = 0; i < input.length; i++) {
  if (input[i].toLocaleLowerCase() === input[i]) {
    s += input[i].toUpperCase()
  } else s += input[i].toLowerCase()
}
console.log(s);