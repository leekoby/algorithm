function solution(num) {
    var answer = false;
    let cnt = 0;
    if(num === 1) return 0
    while( cnt < 500 ){
        
        if(num%2===0)
            {num =num/2}    
        else if(num%2===1)
            {num = num*3+1}        
            
        cnt++
        
        if(num === 1){return cnt }
        }
    
    
    return -1;
    
    
}