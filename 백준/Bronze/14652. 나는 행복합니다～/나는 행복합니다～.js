const fs = require('fs');

const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

console.log(parseInt(input[2]/input[1]), parseInt(input[2]%input[1]));