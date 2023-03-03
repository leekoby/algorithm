const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n")
  .map((x) =>
    x
      .trim()
      .split(" ")
      .map((x) => +x)
  );
let N = input[0][0];
let M = input[0][1];
let A = [];
let B = [];
for (let i = 1; i <= input.length; i++) {
  if (i <= N) {
    A.push(input[i]);
  } else {
    B.push(input[i]);
  }
}
let arr = [];
for (let i = 0; i < A.length; i++) {
  arr.push(A[i].map((x, y) => A[i][y] + B[i][y]));
}
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i].join(" "));
}


// console.time('code_measure');