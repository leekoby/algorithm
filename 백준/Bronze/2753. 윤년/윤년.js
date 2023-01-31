const fs = require('fs')
const inputData = fs.readFileSync('/dev/stdin')
const input = inputData



console.log(input % 4 === 0 && (input % 100 !== 0 || input % 400 === 0) ? 1 : 0);