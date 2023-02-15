const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

//^ 입력 첫째 줄에 시험 본 과목의 개수 N이 주어진다. 이 값은 1000보다 작거나 같다.
//^ 둘째 줄에 세준이의 현재 성적이 주어진다.
//^ 이 값은 100보다 작거나 같은 음이 아닌 정수이고,
//^ 적어도 하나의 값은 0보다 크다.
// console.log(input);
let n = +input[0];
let scoreArr = input[1].split(' ').map(el => +el)
let maxScore = Math.max(...scoreArr)
let sumScore = scoreArr.map((val) => (val / maxScore) * 100).reduce((acc, cur) => acc + cur, 0)
console.log(sumScore / n);