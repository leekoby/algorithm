const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let a = fs.readFileSync(filePath).toString().trim()


// console.time('code_measure');


console.log(a)



// console.timeEnd('code_measure');
