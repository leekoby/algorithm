const fs = require("fs");
const { format } = require("node:path/win32");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim()


let range = 1, block = 1;
while (block < input) {
  block += 6 * range;

  range++;
}

console.log(range);