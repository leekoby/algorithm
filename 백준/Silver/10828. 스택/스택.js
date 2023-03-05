const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...input] = fs.readFileSync(filePath).toString().trim().split('\n').map(a => a.trim().split(' '))
/**
1. push X: 정수 X를 스택에 넣는 연산이다.
2. pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
3. size: 스택에 들어있는 정수의 개수를 출력한다.
4. empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
5. top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.

 */
let stack = [];
let print = [];

for (let i = 0; i < n; i++) {
  if (input[i][0] === 'push') {
    stack.push(Number(input[i][1]));
  }
  if (input[i][0] === 'pop') {
    if (stack[stack.length - 1] === undefined) {
      print.push(-1)
    } else print.push(stack.pop())
  }
  if (input[i][0] === 'size') {
    print.push(stack.length)
  }
  if (input[i][0] === 'empty') {
    stack.length === 0 && print.push(1)
    stack.length !== 0 && print.push(0)
  }
  if (input[i][0] === 'top') {
    if (stack[stack.length - 1] === undefined) {
      print.push(-1)
    } else print.push(stack[stack.length - 1])
  }
}

console.log(print.join('\n'))