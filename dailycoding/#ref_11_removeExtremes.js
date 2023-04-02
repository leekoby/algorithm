/*
removeExtremes
문제
문자열을 요소로 갖는 배열을 입력받아 가장 짧은 문자열과 가장 긴 문자열을 제거한 배열을 리턴해야 합니다.

입력
인자 1 : arr
string 타입을 요소로 갖는 배열
arr[i].length는 20 이하
출력
배열을 리턴해야 합니다.
주의 사항
가장 짧은 문자열의 길이와 가장 긴 문자열의 길이가 같은 경우는 없습니다.
가장 짧은 문자열 또는 가장 긴 문자열이 다수일 경우, 나중에 위치한 문자열을 제거합니다.
입출력 예시
1
2
3
4
5
let output = removeExtremes(['a', 'b', 'c', 'def']);
console.log(output); // --> ['a', 'b']

output = removeExtremes(['where', 'is', 'the', 'longest', 'word']);
console.log(output); // --> ['where', 'the', 'word',]

*/


function removeExtremes(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let result = [];

  let longestLen = 0;
  let longestIdx = 0;
  let shortestLen = 20; // 문제 주의사항에 적혀있다.
  let shortestIdx = 0;
  // 제일 긴 문자열, 짧은 문자열을 담아줄게 필요하다.
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= longestLen) {
      longestLen = arr[i].length;
      longestIdx = i;
    }

    if (arr[i].length <= shortestLen) {
      shortestLen = arr[i].length;
      shortestIdx = i;
    }
  }

  for (let j = 0; j < arr.length; j++) {
    if (j !== longestIdx && j !== shortestIdx) {
      result.push(arr[j]);
    }
  }


  return result;
}
