const fs = require("fs");
const { off } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [a, b, c, d] = require("fs").readFileSync(filePath).toString().trim().split(" ").map(Number);

a = a * 56
b = b * 24
c = c * 14
d = d * 6

console.log(a + b + c + d)