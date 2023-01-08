function solution(s1, s2) {

    let cnt = 0;
    
    
    for(key of s1){
        for(item of s2){
            if(key===item){
                cnt++
            }
        }
    }
    return cnt;
}