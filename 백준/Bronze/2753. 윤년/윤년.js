const fs = require('fs')
const inputData = fs.readFileSync('/dev/stdin')
const originalData = inputData

if(originalData % 4 == 0 && originalData % 100 != 0){
    console.log(1)
}
else if(originalData % 4 == 0 && originalData % 400 == 0){
    console.log(1)
}
else
    console.log(0)