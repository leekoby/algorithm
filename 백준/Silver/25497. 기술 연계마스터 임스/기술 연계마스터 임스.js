const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, input] = fs.readFileSync(filePath).toString().trim().split('\n').map(a => a.trim())

//* L - R // S - K 
let inputKeyLR = []
let inputKeySK = []
let cnt = 0;

for (let i = 0; i < input.length; i++) {
  if (isNaN(input[i])) {
    if (input[i] === 'L') {
      inputKeyLR.push(input[i])
    }
    if (input[i] === 'S') {
      inputKeySK.push(input[i])
    }

    if (input[i] === 'R') {
      let pop = inputKeyLR.pop()
      if (!pop) break;
      pop === 'L' && cnt++
    } else if (input[i] === 'K') {
      let pop = inputKeySK.pop()
      if (!pop) break;
      pop === 'S' && cnt++
    }

  } else cnt++

}
console.log(cnt)