const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n')

let testCase = Number(input[0])

let answer = ''
for (let i = 1; i <= testCase; i++) {
  let data = input[i].split(' ').map(Number).slice(1)
  dataAvg = data.reduce((a, c) => a + c, 1) / data.length

  let filterData = data.filter(data => data >= dataAvg)
  answer += ((filterData.length / data.length) * 100).toFixed(3) + '%' + '\n'

}

console.log(answer)