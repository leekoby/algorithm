let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let cost = [];
input.forEach(function(value) {
  cost.push(Number(value));
});

let cheapBurger = cost[0];
for (let i = 1; i < 3; i++) {
  if (cheapBurger > cost[i]) {
    cheapBurger = cost[i];
  }
}

let cheapDrink = cost[3];
if (cheapDrink > cost[4]) {
  cheapDrink = cost[4];
}

let setCost = cheapBurger + cheapDrink - 50;
console.log(setCost);