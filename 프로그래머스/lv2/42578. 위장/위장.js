function solution(clothes) {
  let answer = 1;
  const clothesMap = new Map();
  
  for (let [name, kind] of clothes) {
    clothesMap.set(kind, (clothesMap.get(kind) || 0) + 1);
  }
  
  for (let count of clothesMap.values()) {
    answer *= (count + 1);
  }
  
  return answer - 1;
}
