function solution(a, b) {

    
    // for(let i = 0 ; i< a.length ; i ++){
    //     answer += a[i] * b[i]
    //     }
     var answer = a.reduce((acc, cur, idx) => acc += cur*b[idx], 0)
    return answer;
}