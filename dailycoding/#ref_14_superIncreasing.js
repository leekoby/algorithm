/*
superIncreasing
문제
수를 요소로 갖는 배열을 입력받아 각 요소들이 그 이전의 요소들의 합보다 큰지 여부를 리턴해야 합니다.

입력
인자 1 : arr
수를 요소로 갖는 배열
arr[i]는 정수
출력
boolean 타입을 리턴해야 합니다.
arr[i]는 arr[0]부터 arr[i-1]까지의 합보다 커야 합니다.
입출력 예시
1
2
3
4
5
let output = superIncreasing([1, 3, 6, 13, 54]);
console.log(output); // --> true

output = superIncreasing([1, 3, 5, 9]);
console.log(output); // --> false

*/

function superIncreasing(arr) {
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= sum) {
      return false;
    }
    sum = sum + arr[i];
  }
  return true;
}


// function superIncreasing(arr) {
//   let answer = arr[0]
//   for (let i = 1; i < arr.length; i++) {
//     if (answer >= arr[i]) return false
//     else if (answer < arr[i]) answer += arr[i]
//   }
//   return true
// }
