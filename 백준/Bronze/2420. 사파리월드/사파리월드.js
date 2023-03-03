const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [a, b] = fs.readFileSync(filePath).toString().trim().split(' ')

// console.time('code_measure');


console.log(Math.abs(a - b))



// console.timeEnd('code_measure');
