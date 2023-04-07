class Queue {
  constructor() {
    this.item = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.item[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.item[this.headIndex];
    delete this.item[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.item[this.headIndex];
  }
  getLength() {

    return this.tailIndex - this.headIndex;
  }

}







let queue = new Queue()

queue.enqueue(5)
queue.enqueue(3)
queue.enqueue(2)
queue.enqueue(7)
queue.dequeue()
queue.enqueue(4)
queue.enqueue(1)
queue.dequeue()


while (queue.getLength() != 0) {
  console.log(queue.dequeue())
}