function solution(a, d, included) {
    let answer = 0;
    let cnt = a
    for(let i = 0 ; i < included.length;i++){
        if(included[i]) answer += cnt
        
        cnt += d
    }
    return answer;
}