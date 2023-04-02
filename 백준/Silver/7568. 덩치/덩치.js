const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...input] = fs.readFileSync(filePath).toString().trim().split('\n').map(el => el.trim())
/*
A	(55, 185)	2
B	(58, 183)	2
C	(88, 186)	1
D	(60, 175)	2
E	(46, 155)	5

*/

let arr = input.map(el => el.split(' ').map(Number))
let check = Array(parseInt(n)).fill(1)

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) check[i]++
  }
}


console.log(check.join(' '))