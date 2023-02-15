const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString());

const answer = [];

function hanoi(num, start, other, target) {
  if (num === 0) return;
    
   hanoi(num - 1, start, target, other);
   answer.push(`${start} ${target}`);
   hanoi(num - 1, other, start, target);
}
console.log((BigInt(2 ** input) + BigInt(-1)).toString());

if (input <= 20) {
    hanoi(input, 1, 2, 3);
    console.log(answer.join("\n"));
}