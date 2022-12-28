function solution(n, k) {
    var answer = 0;
    let j =0
    if(n>=10){
        j = ~~(n/10)
       }  
        
    
 
    
    console.log(j)
    
    
    answer = 12000 * n + 2000 * k - j *2000
    return answer;
}