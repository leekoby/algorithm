const fs = require("fs");
const { off } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [a, b, c] = require("fs").readFileSync(filePath).toString().trim().split(" ");
a = +a + 1
b = +b + 1
c = +c + 1
let answer = parseInt((a * b) / c - 1)
console.log(answer);