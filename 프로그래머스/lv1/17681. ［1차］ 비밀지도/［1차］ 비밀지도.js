function solution(n, arr1, arr2) {
  // 해시(hash) 생성
  const decodedMap = arr1.reduce((acc, cur, i) => {
    const combined = cur | arr2[i]; // 비트 OR 연산
    const binary = toBinary(combined, n); // 2진수로 변환
    const decodedLine = binary.replace(/1|0/g, (match) =>
      match === '1' ? '#' : ' '
    ); // 해독된 지도 한 줄
    return [...acc, decodedLine];
  }, []);

  // 2진수로 변환하는 함수
  function toBinary(num, len) {
    let bin = num.toString(2);
    while (bin.length < len) {
      bin = '0' + bin;
    }
    return bin;
  }

  return decodedMap;
}
