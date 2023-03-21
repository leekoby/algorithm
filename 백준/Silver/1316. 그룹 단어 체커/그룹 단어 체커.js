const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')

let n = Number(input[0]);
let sum = 0;

function check(data) {
  let setData = new Set(data[0]);
  for (let i = 0; i < data.length - 1; i++) {
    //오른쪽 단어와 다르다면 
    if (data[i] !== data[i + 1]) {
      //있으면
      if (setData.has(data[i + 1])) {
        return false
        //없으면 
      } else setData.add(data[i + 1]);
    }
  }
  return true
}

for (let i = 1; i <= n; i++) {
  let data = input[i]
  if (check(data)) sum++;
}

console.log(sum)