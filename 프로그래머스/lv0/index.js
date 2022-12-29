function solution(age) {
    var answer = '';
    let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

    let ageStr = String(age)
    for (k = 0; k < ageStr.length; k++) {
        if (ageStr[0] === k)
            answer += abc[k];
        if (ageStr[1] === k)
            answer += abc[k];
        if (ageStr[2] === k)
            answer += abc[k];


    }

    return answer;
}


console.log('solution(23)', solution(23));
