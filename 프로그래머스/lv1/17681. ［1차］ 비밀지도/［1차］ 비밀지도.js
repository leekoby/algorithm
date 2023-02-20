function solution(n, arr1, arr2) {
  // 해시(hash) 생성
  const hash = arr1.reduce((acc, cur, i) => {
    const combined = cur | arr2[i]; // 비트 OR 연산
    acc.push(toBinary(combined, n)); // 2진수로 변환한 값을 배열에 추가
    return acc;
  }, []);

  // 2진수로 변환하는 함수
  function toBinary(num, len) {
    let bin = num.toString(2);
    while (bin.length < len) {
      bin = '0' + bin;
    }
    return bin;
  }

  // 비밀지도 해독
  const decodedMap = hash.map((line) =>
    line.replace(/1|0/g, (match) => (match === '1' ? '#' : ' '))
  );

  return decodedMap;
}
