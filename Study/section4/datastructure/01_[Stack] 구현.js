class Stack {
  constructor() {
    this.storage = {};
    this.top = -1; // 스택의 가장 상단을 가리키는 포인터 변수를 초기화 합니다.
  }

  size() {
    return this.top + 1;
  }
  //[1, 10]
  // 스택에 데이터를 추가 할 수 있어야 합니다.
  push(element) { // stack.push(1)
    this.top += 1; // top = 0 ;
    this.storage[this.top] = element; //[0] = 1  <- element
  }

  // 가장 나중에 추가된 데이터가 가장 먼저 추출되어야 합니다.
  pop() {
    // 빈 스택에 pop 연산을 적용해도 에러가 발생하지 않아야 합니다
    if (this.top < 0) {
      return;
    }
    // [1,10]
    const result = this.storage[this.top]; // result = 10  / result = 1 
    delete this.storage[this.top]; //this.storage =[1] / this.storage =[]
    this.top -= 1; //this.top= 0 / this.top= -1

    return result; // return 10 / return 1
  }
}

const stack = new Stack();

stack.size(); // 0
for (let i = 1; i < 10; i++) {
  stack.push(i);
}
console.log('stack.pop():', stack.pop());
console.log('stack.pop():', stack.pop());
console.log('stack.size():', stack.size());
console.log('stack.push(8):', stack.push(8));
console.log('stack.size():', stack.size());
