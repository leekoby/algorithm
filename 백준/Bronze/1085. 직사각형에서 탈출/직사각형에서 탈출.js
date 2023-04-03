const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [x, y, w, h] = require("fs").readFileSync(filePath).toString().trim().split(" ").map(Number);

let answer = Math.min(...[x, y, w - x, h - y])
console.log(answer)