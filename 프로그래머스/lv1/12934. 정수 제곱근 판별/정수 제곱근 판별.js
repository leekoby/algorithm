function solution(n) {
   let answer = 0;
    
    for(let i = 1 ; i <= n ; i++){
        if( i=== Math.sqrt(n)  ){
            answer = i + 1
        
            return answer*answer
        }
    } return -1
}