function solution(n) {
  const fibonacci = Array.from({ length: n }, (_, i) => i + 1)
    .reduce((acc, cur) => {
      if (cur <= 2) {
        acc.push(1);
      } else {
        const sum = (acc[cur - 2] + acc[cur - 3]) % 1234567;
        acc.push(sum);
      }
      return acc;
    }, []);

  return fibonacci[n - 1];
}
