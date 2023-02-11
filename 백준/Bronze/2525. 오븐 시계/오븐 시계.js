var fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let startHour = parseInt(input[0].split(' ')[0]);
let startMinute = parseInt(input[0].split(' ')[1]);
let setTime = parseInt(input[1]);

let hour = 0;
let minute = 0

hour = Math.floor((startHour * 60 + startMinute + setTime) / 60);
minute = (startHour * 60 + startMinute + setTime) % 60;
if (hour >= 24) {
  hour -= 24;
}
console.log(`${hour} ${minute}`);