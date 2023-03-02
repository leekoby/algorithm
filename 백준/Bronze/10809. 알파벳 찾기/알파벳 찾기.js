const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let n = fs.readFileSync(filePath).toString().trim()


let result = [];
for (let i = 97; i <= 122; i++) {
  result.push(n.indexOf(String.fromCharCode(i)))
}

console.log(result.join(' '))
