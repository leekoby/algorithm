function solution(clothes) {
	let answer = 1; // 결과값 초기화

	const clothesMap = new Map(); // 맵 객체 생성

	// clothes 배열을 순회하면서 각 종류의 옷의 개수를 clothesMap 맵에 등록
	for (let [name, kind] of clothes) {
  		clothesMap.set(kind, (clothesMap.get(kind) || 0) + 1);
	}

	// 모든 종류별로 선택할 수 있는 옷의 개수에 1을 더해 곱한 결과를 모두 곱함
	for (let count of clothesMap.values()) {
	 answer *= (count + 1);
	}

	// 아무것도 선택하지 않는 경우를 제외하기 위해 결과값에서 1을 뺌
	return answer - 1;

}