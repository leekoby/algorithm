const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let answer = '';
for (let i = 1; i < input.length; i++) {
  const str = input[i].trim().toLowerCase();
  const reversedStr = str.split('').reverse().join('');
  if (str === reversedStr) {
    answer += 'Yes\n';
  } else {
    answer += 'No\n';
  }
}
console.log(answer);
