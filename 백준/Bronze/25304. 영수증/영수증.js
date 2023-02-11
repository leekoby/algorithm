let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const result = Number(input[0]);

const count = Number(input[1]);

input.splice(0, 2);

let check = 0;

for (let i = 0; i < count; i++) {
  let [price, num] = input[i].split(" ");
  check += Number(price) * Number(num);
}

console.log((result === check) ? "Yes":"No")