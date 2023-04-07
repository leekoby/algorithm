const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...numbers] = fs.readFileSync(filePath).toString().trim().split('\n').map(Number)

function solution(n, numbers) {
  const stack = [];
  let answer = '';
  let count = 1;

  for (let i = 0; i < n; i += 1) {
    const number = numbers.shift();

    while (count <= number) {
      stack.push(count++);
      answer += '+ ';
    }

    const popedItem = stack.pop();
    if (popedItem !== number) {
      return 'NO';
    }
    answer += '- ';
  }

  return answer.split(' ').join('\n');
}

// 제출
const answer = solution(n, numbers);
console.log(answer);