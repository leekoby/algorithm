function solution(array, n) {
    var answer = 0;
    for(key of array){
        key === n ? answer ++ : 0
    }
    return answer;
}