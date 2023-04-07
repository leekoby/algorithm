const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number)

let N = Number(input.shift())
let numbers = input.sort((a, b) => a - b)
let answer = ''


// 산술평균
answer += `${Math.round(numbers.reduce((a, b) => a + b, 0) / N)}\n`;
//중앙값
answer += `${numbers[Math.floor(N / 2)]}\n`;

//최빈값
let map = new Map();
let max = 1;
for (let number of numbers) {
  if (map.has(number)) {
    max = Math.max(max, map.get(number) + 1);
    map.set(number, map.get(number) + 1);
  } else map.set(number, 1);
}
const maxArr = [];
for (let [key, val] of map) {
  if (val === max) maxArr.push(key);
}

answer += maxArr.length === 1 ? `${maxArr[0]}\n` : `${maxArr[1]}\n`;

// 범위
answer += `${numbers[N - 1] - numbers[0]}\n`;

console.log(answer);