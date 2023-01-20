const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [day, week] = fs.readFileSync(filePath).toString().trim().split('\n')

const answer = week.split(' ').filter(el => el === day).length

console.log(answer)