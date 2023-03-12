const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [a, c] = fs.readFileSync(filePath).toString().trim().split('\n').map(e => e.trim());

a = a.split(' ')
c = c.split(' ')

let bx = c[0] - a[2];
let by = c[1] / a[1];
let bz = c[2] - a[0];

console.log(`${bx} ${by} ${bz}`)