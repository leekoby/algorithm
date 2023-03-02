const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');


//let date = new Date().toISOString().split('T');
//console.log(date[0])

const date= new Date();
const res=new Date(date.getTime()-(date.getTimezoneOffset()*60000)).toISOString().split("T");
console.log(res[0]);