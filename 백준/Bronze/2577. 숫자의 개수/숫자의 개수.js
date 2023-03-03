const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [a, b, c] = fs.readFileSync(filePath).toString().trim().split('\n')


// console.time('code_measure');

let input = (a * b * c).toString().split('').map(e => +e)


let map = new Map()

for (let i = 0; i < 10; i++) {
  map.set(i, 0)
}


for (let i = 0; i <= input.length - 1; i++) {
  map.set(input[i], map.get(input[i]) + 1);
}

for (const [k, v] of map) {
  console.log(v)
}
