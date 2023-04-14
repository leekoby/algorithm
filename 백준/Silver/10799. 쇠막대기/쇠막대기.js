const path = process.platform === "linux" ? "/dev/stdin" : "input.txt"; // 리눅스로 테스트할 땐 따로 설정해주어야 합니다.
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const [expression] = input;

// 문제 풀이
function solution(expression) {
	const splitExpression = expression.split('');
	let sticks = [];
	let answer = 0;

	for (let i = 0; i < splitExpression.length; i += 1) {
		const string = splitExpression[i];
		// 레이저 발사
		if (string === '(' && splitExpression[i + 1] === ')') {
			answer += sticks.length;
			i += 1;
		} 
		// 쇠막대기 시작
		else if (string === '(') {
			sticks.push(string);
		} 
		// 쇠막대기 끝
		else if (string === ')') {
			sticks.pop();
			answer += 1;
		}
	}
	return answer;
}

// 제출
const answer = solution(expression);
console.log(answer);