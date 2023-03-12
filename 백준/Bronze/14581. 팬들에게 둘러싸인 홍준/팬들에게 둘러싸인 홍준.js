const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let i = fs.readFileSync(filePath).toString().trim()

let input = `:${i}:`;
let fan = ':fan:';

console.log(`${fan}${fan}${fan}
${fan}${input}${fan}
${fan}${fan}${fan}`)