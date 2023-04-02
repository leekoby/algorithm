/*
1. 입력 배열 : arr = [ 2, 4, -10, 4, -9]
2. 중복 제거를 위해 집합으로 만들기 uniqueArray = [ 2, 4, -10, -9]
3. 정렬 수행 : sorted [ -10, -9, 2, 4]
4. Map을 이용해 0부터 차례대로 매핑하기
5. 하나씩 매핑 값 출력하기 
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')

let n = Number(input[0])
let arr = input[1].split(' ').map(Number);

// 집합(set)으로 변경해 중복 값을 없앤 뒤 다시 배열로 반환 
let uniqueArray = [...new Set(arr)];
uniqueArray.sort((a, b) => a - b); // 오름차순 정렬

// 0 부터 차례대로 매핑(mapping)
let map = new Map();
for (let i = 0; i < uniqueArray.length; i++) {
  map.set(uniqueArray[i], i);
}

let answer = ''
for (x of arr) answer += map.get(x) + ' ';
console.log(answer)

