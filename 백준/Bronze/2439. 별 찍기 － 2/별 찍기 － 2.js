const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();


let num = Number(input);

let star = new Array(num).fill(' ');

for (let i = num - 1; i >= 0; i--) {
  star[i] = '*';

  console.log(star.join(''));
}