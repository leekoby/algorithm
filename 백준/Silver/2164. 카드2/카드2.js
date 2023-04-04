const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')

class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
  }
  enqueue(value) {
    this.queue[this.tail++] = value
  }
  dequeue() {
    const value = this.queue[this.head];
    delete this.queue[this.head];
    this.head++;
    return value;
  }
  size() {
    return this.tail - this.head;
  }
}



const queue = new Queue()

let n = Number(input);
for (let i = 1; i <= n; i++) {
  queue.enqueue(i)
}

while (queue.size() > 1) {
  queue.dequeue()
  queue.enqueue(queue.dequeue())
}

console.log(queue.dequeue())