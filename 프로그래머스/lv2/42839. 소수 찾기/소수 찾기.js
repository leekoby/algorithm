// 소수 판별 함수
function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 만들 수 있는 소수가 몇 개인지 구하는 함수
function solution(numbers) {
  const arr = numbers.split('');
  const answer = new Set();
  // 같은 숫자의 경우 한 번만 세야 하므로 Set 사용해주기
  
  // 만들 수 있는 모든 순열을 재귀적으로 찾기
  function getPermutation(numbersArray, fixedNumber) {
    if (numbersArray.length) {
      for (let i = 0; i < numbersArray.length; i++) {
        const temp = [...numbersArray];

        // fixedNumber를 제외한 숫자 배열을 재귀함수 호출 시 넘기기 위함
        temp.splice(i, 1);

        if (isPrime(parseInt(fixedNumber + numbersArray[i]))) {
          // 문자열을 parseInt 해서 넣어주어야 '011' 과 '11' 이 같은 숫자로 취급됨
          answer.add(parseInt(fixedNumber + numbersArray[i]));
        }
        getPermutation(temp, fixedNumber + numbersArray[i]);
      }
    }
  }
  
  getPermutation(arr, '');
  return answer.size;
}