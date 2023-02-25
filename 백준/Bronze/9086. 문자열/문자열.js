const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, ...data] = input

for (let i = 0; i < n; i++) {
  console.log(data[i][0] + data[i][data[i].length - 1])
}



