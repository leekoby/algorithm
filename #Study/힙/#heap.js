/* 
* 힙 요소 추가 알고리즘
* - 요소가 추가될 때는 트리의 가장 마지막 정점에 위치한다.
* - 추가 후 부모 정점보다 우선순위가 높다면 부모 정점과 순서를 바꾼다.
* - 이 과정을 반복하면 결국 가장 우선순위가 높은 정점이 루트가 된다.
* - 완전 이진 트리의 높이는 log N 이기에 힙의 요소 추가 알고리즘은  O(logN)의 시간복잡도를 가진다.
*/

/*
* 힙 요소 제거 알고리즘
* - 요소 제거는 루트 정점만 가능
* - 루트 정점이 제거된 후 가장 마지막 정점이 루트에 위치한다.
* - 루트 정점의 두 자신 정점 중 더 우선순위가 높은 정점과 바꾼다. 
* - 두 자식 정점이 우선순위가 더 낮을때까지 반복한다.
* - 완전 이진 트리의 높이는 logN이기에 힙의 요소 제거 알고리즘은 O(logN)의 시간복잡도를 가진다.
 */

class MaxHeap {
  constructor() {
    this.heap = [null] // 초기화된 빈 Max Heap 배열
  }

  push(value) {
    this.heap.push(value); // 새로운 노드를 맨 끝에 추가
    let currentIndex = this.heap.length - 1; // 현재 노드의 인덱스
    let parentIndex = Math.floor(currentIndex / 2); // 부모 노드의 인덱스

    // 새로운 노드의 값이 부모 노드보다 크면,
    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      // 부모 노드와 새로운 노드를 교체
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      // 현재 노드의 인덱스와 부모 노드의 인덱스를 업데이트
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        currentIndex = rightIndex;
      } else {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex;
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }
    return returnValue
  }
}


const heap = new MaxHeap();
heap.push(63);
heap.push(45);
heap.push(36);
heap.push(54);
heap.push(27);

console.log(heap.heap)

const array = [];
array.push(heap.pop())
array.push(heap.pop())
array.push(heap.pop())
array.push(heap.pop())
array.push(heap.pop())
console.log(array)