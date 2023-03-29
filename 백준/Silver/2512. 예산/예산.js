const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')

let n = Number(input[0].split(' ')[0])// 지방의 수 (n)
let arr = input[1].split(' ').map(Number); //각 지방의 예산 요청 
let m = Number(input[2]); // 총 예산 (m)

let start = 1; // 이진 탐색을 위한 시작점(start)와 끝점(end) 설정 
let end = arr.reduce((a, b) => Math.max(a, b));

let result = 0;
while (start <= end) { // 이진 탐색 수행(반복문)
  let mid = parseInt((start + end) / 2)
  let total = 0; // 배정된 예산의 총액 계산 
  for (x of arr) {
    total += Math.min(mid, x); // 예산 배정
  }
  if (total <= m) { // 조건을 만족한다면, 상한액(최대화가 목표)을 증가
    result = mid;
    start = mid + 1;
  } else { // 조건을 만족하지 못하면, 상한액 감소 
    end = mid - 1;
  }
}

console.log(result)