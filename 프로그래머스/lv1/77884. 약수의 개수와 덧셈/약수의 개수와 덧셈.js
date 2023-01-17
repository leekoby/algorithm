
function checker (num){   
        let cnt= 0;
        for( let j = 1 ; j <= num; j ++){
             if(num % j === 0  ){   
                    cnt ++ 
                
            }
        }
               console.log(cnt)
               return cnt 
}
function solution(left, right) {
    var answer = 0;
    
    
    
    for(let i = left ; i<= right ; i++){
        let chk = checker(i);
        console.log(chk)
            if(chk%2 === 0){
                answer += i
            }else if(chk %2 !== 0) answer -= i
        }
    
    return answer; 
}
