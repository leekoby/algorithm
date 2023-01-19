const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();
let score = parseInt(input)

if (input >= 90) {
    grade = 'A'
}
else if (input >= 80 ) {
    grade = 'B'
}
else if (input >= 70 ) {
    grade = 'C'
}

else if (input >= 60 ) {
    grade = 'D'
}

else grade = 'F'



console.log(grade)