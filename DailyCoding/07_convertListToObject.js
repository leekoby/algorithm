/**convertListToObject
문제
2차원 배열(배열을 요소로 갖는 배열)을 입력받아 각 배열을 이용해 만든 객체를 리턴해야 합니다.

입력
인자 1 : arr
배열을 요소로 갖는 배열
arr[i]는 string 타입을 요소로 갖는 배열
arr[i].length는 0 또는 2
출력
arr[i]의 첫 번째 요소를 키, 두 번째 요소를 값으로 하는 객체를 리턴해야 합니다.
주의 사항
중복되는 키의 경우, 초기의 값을 사용합니다.
빈 배열을 입력받은 경우, 빈 객체를 리턴해야 합니다.
arr[i]의 길이가 0인 경우, 무시합니다.
입출력 예시

const arr = [
  ['make', 'Ford'],
  ['model', 'Mustang'],
  ['year', '1964'],
  ['make', 'Bill'],
];

let output = convertListToObject(arr);

console.log(output) // -->
{
  make : 'Ford'
  model : 'Mustang',
  year : '1964'
} */

function convertListToObject(arr) {
    let obj = {};


    for (let i in arr) {
        if (arr[i].length !== 0 && obj[arr[i][0]] === undefined) {
            obj[arr[i][0]] = arr[i][1];
        }
    }
    return obj;
}