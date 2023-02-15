const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')



for (let i = 0; i < input.length; i++) {
  let numbers = input[i].split(' ');

  console.log(+numbers[0] + +numbers[1])
}