function solution(n, arr1, arr2) {
  // 비트 OR 연산을 위한 Map 생성
  const bitMap = new Map();
  for (let i = 0; i < Math.pow(2, n); i++) {
    bitMap.set(i, toBinary(i, n));
  }

  // 2진수로 변환하는 함수
  function toBinary(num, len) {
    let bin = num.toString(2);
    while (bin.length < len) {
      bin = '0' + bin;
    }
    return bin;
  }

  // 두 배열을 합친 비밀지도 생성
  const secretMap = arr1.map((num1, i) => {
    const num2 = arr2[i];
    const combined = num1 | num2; // 비트 OR 연산
    return bitMap.get(combined);
  });

  // 비밀지도 해독
  const decodedMap = secretMap.map((line) =>
    line.replace(/1|0/g, (match) => (match === '1' ? '#' : ' '))
  );

  return decodedMap;
}
