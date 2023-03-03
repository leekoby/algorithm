const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [a, b] = fs.readFileSync(filePath).toString().trim().split(" ").map(e => BigInt(e))


console.log((a / b).toString())
console.log((a % b).toString())
