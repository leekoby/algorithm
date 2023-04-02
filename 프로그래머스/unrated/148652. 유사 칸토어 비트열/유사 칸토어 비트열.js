function solution(n, l, r) {
    let answer = 0;
    for (let i = l - 1; i <=r - 1; i++) {
        if (!i.toString(5).match('2')) answer += 1;
    }
    return answer;
}