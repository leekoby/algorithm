function solution(strArr) {
    var answer = new Array(strArr.length).fill(0);
    for(let i=0; i<strArr.length; i++){
        answer[strArr[i].length] += 1
    }
    return Math.max(...answer);
}