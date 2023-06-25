function solution(str1, str2) {
    let answer = '';
    for (let i = 0; i < Math.max(str1.length, str2.length); i++) {
        if (i < str1.length) {
            answer += str1[i];
        }
        if (i < str2.length) {
            answer += str2[i];
        }
    }

    return answer;
}