const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')
const [N, M, B] = input[0].split(" ").map(v => +v);
// 첫번째 줄에서 입력받은 N, M, B 값을 배열로 저장합니다.
input.shift();
// 첫번째 줄은 이미 처리했으므로 배열에서 제거합니다.
const land = input.join(" ").split(" ");
// 입력받은 땅의 높이 정보를 공백 기준으로 나누어 배열로 저장합니다.
const heightArr = new Array(257).fill(0);
// 땅의 높이는 0 ~ 256 사이의 정수값을 가집니다. 이를 카운트하기 위한 배열을 생성합니다.
land.forEach(v => heightArr[v]++);
// 입력받은 땅의 높이 정보를 카운트하여 배열에 저장합니다.


const answer = function (B, heightArr) {
  // 블록의 개수 B와 땅의 높이 정보를 가지고 있는 배열을 인자로 받는 함수를 정의합니다.
  let addition, removal;
  // 추가해야 할 블록 수와 제거해야 할 블록 수를 저장하는 변수를 정의합니다.
  let [height, curTime, minTime] = [0, 0, Number.MAX_SAFE_INTEGER];
  // 블록 추가/제거 작업을 수행하면서 구할 최소 시간과 이때의 땅의 높이를 저장하는 변수를 정의합니다.
  for (let i = 256; i >= 0; i--) {  
    // 높이가 높은 순서대로 탐색합니다.
    addition = 0;  // 블록을 추가할 때 필요한 블록 수를 저장하는 변수입니다.
    removal = 0;  // 블록을 제거할 때 필요한 블록 수를 저장하는 변수입니다.
    heightArr.forEach((v, idx) => {  // 땅의 높이 정보를 순회합니다.
      if (i < idx) removal += (idx - i) * v;  
      // 현재 높이보다 높은 곳에 있는 땅을 제거할 때 필요한 블록 수를 계산합니다.
      else addition += (i - idx) * v; 
       // 현재 높이보다 낮은 곳에 있는 땅을 추가할 때 필요한 블록 수를 계산합니다.
    });
    if (B < addition - removal) continue; 
     // 블록의 개수가 부족한 경우 다음 높이로 넘어갑니다.
    curTime = addition + removal * 2; 
     // 블록을 추가/제거할 때 걸리는 시간을 계산합니다.
    if (minTime !== Number.MAX_VALUE && minTime < curTime) break; 
     // 현재까지 구한 최소 시간보다 큰 경우 탐색을 중단합니다.
    if (minTime > curTime) {  
      // 현재까지 구한 최소 시간보다 작은 경우 최소 시간과 땅의 높이를 업데이트합니다.
      minTime = curTime;
      height = i;
    }
  }

  if (minTime === Number.MAX_VALUE) minTime = 0; 
   // 블록을 추가할 필요가 없는 경우 최소 시간을 0으로 설정합니다.
  return `${minTime} ${height}`;
    // 최소 시간과 땅의 높이를 문자열로 반환합니다.
};

console.log(answer(B, heightArr));  