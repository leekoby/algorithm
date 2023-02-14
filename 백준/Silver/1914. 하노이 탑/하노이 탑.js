const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const moves = [];

function hanoi(num, from, to, other) {
  if (num === 1) {
    moves.push(`${from} ${to}`);
  } else {
    hanoi(num - 1, from, other, to);
    moves.push(`${from} ${to}`);
    hanoi(num - 1, other, to, from);
  }
}

rl.on("line", (input) => {
  const n = BigInt(input);
  const count = 2n ** n - 1n;
  console.log(count.toString());

  if (n <= 20n) {
    hanoi(Number(n), 1, 3, 2);
  }
});

rl.on("close", () => {
  console.log(moves.join("\n"));
});
