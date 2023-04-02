const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n')


let data = [];
for (let i = 0; i < n; i++) {
  let [x, y] = arr[i].split(' ').map(Number)
  data.push([x, y])
}

function compare(a, b) {
  if (a[0] !== b[0]) return a[0] - b[0];
  else return a[1] - b[1];
}
data.sort(compare)

let answer = ""
for (const point of data) {
  answer += point[0] + ' ' + point[1] + '\n'
}
console.log(answer)