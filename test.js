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

// const fs = require("fs");
// const { arrayBuffer } = require("stream/consumers");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath)
//     .toString()
//     .trim()
//     .split(' ')
//     .map(el => el);
// console.log(input)

//===================================================================


let answer;

answer = Input.filter((v, i) => {
    if (Input.indexOf(v) === i) { return true }
})



console.log(answer.join(' '));