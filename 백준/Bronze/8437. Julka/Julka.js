const fs = require("fs");
const { off } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n").map(BigInt);

const appleAllCount = input[0];
const claudiaCount = input[1];

let claudia = ((appleAllCount + claudiaCount) / 2n)
let natalia = ((appleAllCount - claudiaCount) / 2n)

console.log(`${claudia}\n${natalia}`)