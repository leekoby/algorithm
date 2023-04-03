const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");
let n = Number(input[0]); //정점 개수
let m = Number(input[1]); // 간선 개수 

let graph = []// 그래프 정보 입력

for (let i = 1; i <= n; i++) graph[i] = [];

for (let i = 2; i <= m + 1; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  graph[x].push(y);
  graph[y].push(x);
}
let cnt = 0;
let visited = new Array(n + 1).fill(false);

function dfs(x) {
  visited[x] = true;
  cnt++
  for (y of graph[x]) {// 현재 노드와 연결된 다른 노드를 재귀적으로 방문 
    if (!visited[y]) dfs(y)
  }
}

dfs(1);
console.log(cnt - 1)