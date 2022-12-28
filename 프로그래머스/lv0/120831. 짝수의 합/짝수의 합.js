function solution(n) {
    var answer = 0;
    let cnt = 0 ;
    
    while (cnt <= n){
        if(cnt%2===0){
            answer += cnt;
        }
        cnt ++;
    }
    return answer;
}