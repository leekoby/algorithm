/*
* 트라이의 특징
*- 검색어 자동완성, 사전 찾기 등에 응용될 수 있다. 
*- 문자열을 탐색할 대 단순하게 비교하는 것 보다 효율적으로 찾을 수 있다.
*- L이 문자열의 길이일 때 탐색, 삽입은 O(L)만큼 걸린다.
*- 대신 각 정점이 자신에 대한 링크를 전부 가지고 있기 때문에 저장 공간을 더 많이 사용한다. 
*/

/*
 * 트라이 구조 
 *- 루트는 비어있다.
 *- 각 간선(링크)은 추가될 문자를 키로 가진다.
 *- 각 정점은 이전 정점의 값 + 간선의 키를 값으로 가진다.
 *- 해시 테이블과 연결 리스트를 이용하여 구현할 수 있다.
 */

class Node {
  constructor(value = '') {
    this.value = value; //현재 노드까지 이어진 문자열을 저장하는 값
    this.children = new Map(); // 현재 노드의 자식 노드를 저장하는 Map 객체
  }
}

class Trie {
  constructor() {
    this.root = new Node(); //루트 노드를 생성
  }

  insert(string) {
    let currentNode = this.root; //시작점을 루트 노드로 설정

    for (const char of string) { // 문자열을 순회하면서 
      if (!currentNode.children.has(char)) {  // 현재 노드의 자식 노드 Map 객체에 해당 문자를 가진 자식 노드가 없으면
        currentNode.children.set(char, new Node(currentNode.value + char) // 새로운 노드를 생성하여 현재 노드의 자식 노드 Map 객체에 추가
        );
      }
      currentNode = currentNode.children.get(char); //현재 노드를 해당 문자를 가진 자식 노드로 변경 
    }
  }

  has(string) {
    let currentNode = this.root; // 시작점을 루트 노드로 설정

    for (const char of string) { // 문자열을 순회
      if (!currentNode.children.has(char)) { // 현재 노드의 자식 노드 Map 객체에 해당 문자를 가진 자식 노드가 없으면 
        return false; // 문자열이 Trie에 없으므르 false 반환
      }
      currentNode = currentNode.children.get(char); // 현재 노드를 해당 문자를 가진 자식 노드로 변경
    }
    return true; // 문자열 Trie에 있으므로 true를 반환 
  }
}

const trie = new Trie();

trie.insert('cat');
trie.insert('car');
console.log(trie.has('cat'));
console.log(trie.has('car'));
console.log(trie.has('cap'));

