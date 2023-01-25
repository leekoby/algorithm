// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.on('line', function (line) {
//     console.log(line);

//     rl.close();
// }).on("close", function () {
//     process.exit();
// });

//===================================================================

const fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
let data = input[1].trim().split(' ')
    .map(el => el);
console.log(data)

let answer = 0, cnt = 0;

for (let x of data) {
    if (+x === 1) {
        cnt++
        answer += cnt;
    }
    else cnt = 0;
}

console.log(answer)