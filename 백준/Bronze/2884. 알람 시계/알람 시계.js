let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

if (b < 45) {
  b = b + 15;
  a = a - 1;
} else {
  b = b - 45;
}

if (a < 0) {
  a = 23;
}

console.log(a, b);