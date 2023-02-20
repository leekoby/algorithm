const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let N, M;
let arr;

rl.on('line', function (line) {
  if (!N) {
    [N, M] = line.split(' ').map(x => parseInt(x));
    arr = Array(N).fill(0);
  } else {
    const [i, j, k] = line.split(' ').map(x => parseInt(x));
    for (let y = i - 1; y < j; y++) {
      arr[y] = k;
    }
    M--;
  }
  if (M === 0) {
    console.log(arr.join(' '));
    process.exit();
  }
});
