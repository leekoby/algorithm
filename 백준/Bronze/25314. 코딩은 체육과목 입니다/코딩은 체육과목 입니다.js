const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');


let n = +input[0];
// console.log(n);



console.log('long '.repeat(n / 4) + 'int');

