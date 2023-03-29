/* 정렬되어 있는 리스트에서 탐색 범위를 절반씩 좁혀가며 데이터를 탐색한다. 
  이진 탐색을 수행할 때는 시작점(left)와 끝점(end)을 기준으로 탐색 범위를 명시한다. 

다음과 같은 사례에서 효과적
1. 매우 넓은(억 단위 이상) 탐색 범위에서 최적의 해를 찾아야 하는 경우 
2. 데이터를 정렬한 뒤 다수의 쿼리를 날려야 하는 경우 
 */

//이진 탐색 소스코드 구현(재귀함수)
function binarySearch(arr, target, start, end) {
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    // 찾은 경우 중간점 인덱스 반환
    if (arr[mid] === target) return mid;

    // 중간점의 값보다 찾고자 하는 값이 작은 경우 왼쪽 확인 
    else if (arr[mid] > target) end = mid - 1

    // 중간점의 값보다 찾고자 하는 값이 큰 경우 오른쪽 확인 
    else start = mid + 1
  }
}

// n(원소의 개수)와 target(찾고자 하는 값)  

let n = 10;
let target = 7;
arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];



//이진 탐색 수행 결과 출력 
let result = binarySearch(arr, target, 0, n - 1);
if (result === -1) console.log('원소가 존재하지 않습니다.');
else console.log(`${result + 1}번째 원소입니다.`)