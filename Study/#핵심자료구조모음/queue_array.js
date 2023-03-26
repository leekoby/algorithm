class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }
  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  peek() {
    return this.queue[this.front]
  }

  size() {
    return this.rear - this.front
  }

}


const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(8);
queue.enqueue(16);

console.log(queue.size()); // 5
console.log(queue.peek()); // 1

console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2

console.log(queue.size()); // 3
console.log(queue.peek()); // 4
