class Node {
  constructor(value) {
    this.value = value;
    this.next = null; //next의 디폴트는 null로 지정 왜냐하면 linkedlist의 tail(마지막은) null로 끝나기때문
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null; //처음에 데이터가 없다면 head는 null이다.
    this.tail = null;
    this.size = 0; //리스트의 크기를 찾기위해 사용 디폴트는 0으로 지정.
  }
  
  find(value) {
    let currNode = this.head;
    while (currNode.value !== value) { //linked list가 끝날 떄까지
      currNode = currNode.next;
    }
    return currNode;
  }

  append(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) { //처음 생성된 Node
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode
    }
    this.size += 1;

  }

  insert(node, newValue) {
    const newNode = new Node(newValue); //새로운 노드 생성
    newNode.next = node.next; // 가리키는 노드를 새로은 노드가 가리키기
    node.next = newNode; //이제부터 새로운 노드를 가리키도록 하기
    this.size += 1;

  }

  remove(value) {
    let prevNode = this.head;
    while (prevNode.next.value !== value) {
      prevNode = prevNode.next
    }
    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next // 삭제할 노드 다음 노드를 가리키도록 하기
      this.size -= 1;
    }
  }
  display() {
    let currNode = this.head;
    let displayString = '['
    while (currNode !== null) {
      displayString += `${currNode.value}, `
      currNode = currNode.next;
    }
    displayString = displayString.substr(0, displayString.length - 2);
    displayString += ']';
    console.log(displayString);
  }
  returnSize() {
    return this.size;
  }
}

const linkedlist = new SinglyLinkedList();
linkedlist.append(1);
linkedlist.append(2);
linkedlist.append(3);
linkedlist.append(4);
linkedlist.append(5);
linkedlist.display();
console.log(linkedlist.returnSize());
console.log(linkedlist.find(3));
linkedlist.remove(3);
linkedlist.display();
linkedlist.insert(linkedlist.find(2), 10);
console.log(linkedlist.returnSize());
linkedlist.display();



