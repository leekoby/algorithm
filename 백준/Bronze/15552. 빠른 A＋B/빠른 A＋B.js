const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let answer = '';

for (let idx = 1; idx <= Number(input[0]); idx++) {
  const inputs = input[idx].split(' ').map(Number);
  answer = idx < Number(input[0]) ? answer + `${inputs[0] + inputs[1]}\n`
    : answer + `${inputs[0] + inputs[1]}`;
}

console.log(answer);