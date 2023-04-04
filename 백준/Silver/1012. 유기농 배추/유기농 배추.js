const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')

function dfs(graph, n, m, x, y) {//깊이 우선탐색 진행
  //주어진 범위를 벗어나는 경우 즉시 종료 
  if (x <= -1 || x >= n || y <= -1 || y >= m) return false

  //현재 노드를 아직 처리하지 않았다면,

  if (graph[x][y] === 1) {
    //해당 노드 방문 처리 
    graph[x][y] = -1;
    //상,하 좌, 우의 위치들도 모두 재귀적으로 호출 
    dfs(graph, n, m, x - 1, y);
    dfs(graph, n, m, x, y - 1);
    dfs(graph, n, m, x + 1, y);
    dfs(graph, n, m, x, y + 1);
    return true;
  }
  return false;
}

let testCase = Number(input[0]);// 테스트 케이스의 수 
let line = 1;
while (testCase--) {
  //가로길이 M, 세로 길이N, 배추가 심어져있는 위치의 개수 k
  let [m, n, k] = input[line].split(' ').map(Number)
  let graph = []//그래프 정보 

  for (let i = 0; i < n; i++) {
    graph[i] = new Array(m);
  }
  for (let i = 1; i <= k; i++) {
    let [y, x] = input[line + i].split(' ').map(Number);
    graph[x][y] = 1;
  }//그래프의 정점 [y,x]
  let answer = 0; //연결 요소 (connected component)의 수 계산
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(graph, n, m, i, j)) answer++; //현재 위치에서 dfs수행 
    }
  }
  line += k + 1; //다음 테스트 케이스로 이동 
  console.log(answer)
}