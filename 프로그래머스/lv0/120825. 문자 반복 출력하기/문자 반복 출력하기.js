function solution(my_string, n) {
    var answer = '';
    let cnt = 0;
   
    while (cnt < my_string.length){
        const reapeatChr = my_string[cnt]
        
        let reap =0;
            while(reap<n){
                answer = answer +reapeatChr;
                
                
                reap++;
            }
        
        
        
        cnt ++;
    }
    
    
    
    return answer;
}