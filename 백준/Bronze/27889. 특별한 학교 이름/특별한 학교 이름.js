const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let n = fs.readFileSync(filePath).toString().trim()

let school = {
  NLCS: 'North London Collegiate School',
  BHA: 'Branksome Hall Asia',
  KIS: 'Korea International School',
  SJA: 'St. Johnsbury Academy',
}

if (school[n]) console.log(school[n])

// if (n === 'NLCS') console.log('North London Collegiate School')
// else if (n === 'BHA') console.log('Branksome Hall Asia')
// else if (n === 'KIS') console.log('Korea International School')
// else if (n === 'SJA') console.log('St. Johnsbury Academy')