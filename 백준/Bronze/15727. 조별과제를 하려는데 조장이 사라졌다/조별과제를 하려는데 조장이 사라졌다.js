const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let a = +fs.readFileSync(filePath).toString().trim()
//.split(' ')



console.log(Math.ceil(a / 5))