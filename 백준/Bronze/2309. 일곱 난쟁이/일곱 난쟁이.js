const fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(el => Number(el));

let answer = input;
let sum = answer.reduce((a, b) => a + b, 0)

endOfCircuit: for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
        if ((sum - answer[i] - answer[j] === 100)) {
            answer.splice(j, 1)
            answer.splice(i, 1)
            break endOfCircuit;
        }
    }
}
console.log(answer.sort((a, b) => a - b).join('\n'));