function solution(queue1, queue2) {
  let totalArr = [...queue1, ...queue2];
  const maxCount = (queue1.length + queue2.length) * 2;
  const sum = (arr) => arr.length === 0 ? 0 : (arr.reduce((a, b) => a + b));
  let start = 0;
  let end = queue1.length;
  let currentSum = sum(totalArr.slice(start, end));
  const halfTotal = sum(totalArr) / 2;
  let count = 0;
  while (count <= maxCount) {
    if (currentSum > halfTotal) {
      currentSum -= totalArr[start];
      start++;
    } else if (currentSum < halfTotal) {
      currentSum += totalArr[end];
      end++;
    }
    else if (currentSum === halfTotal) {
      return count;
    }
    count++;
  }
  return -1;
}