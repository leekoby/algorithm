function solution(x, n) {
    let answer = [];
    let cnt = 0;
    for(let i = x ; ; i = i + x){
        answer.push(i)
        cnt ++
        if(cnt === n) return answer;
    }
    
}