const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')


let [row, col] = input[0].split(' ').map(Number)
let [, ...arr] = input.map(e => e.trim())
let line = ['WBWBWBWB', 'BWBWBWBW']
let answer = [];

for (let i = 0; i <= row - 8; i++) {
  for (let j = 0; j <= col - 8; j++) {
    // 흰색으로 시작하거나 검은색으로 시작하거나
    for (let k = 0; k < 2; k++) {
      let count = 0;

      // 8*8 정사각형을 도는 for문
      for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
          const current = arr[i + x][j + y];
          if (current !== line[(x + k) % 2][y]) count++;
        }
      }
      answer.push(count);
    }
  }
}
console.log(Math.min(...answer))
