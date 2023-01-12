function solution(a, b) {
    let answer = 0;
    if(a===b) return a;
    a>b ? sum(b,a) : sum(a,b)
    
    function sum(a,b){
        for(let i = a ; i <=b ; i++){
            answer += i
        }
    }
    return answer
}