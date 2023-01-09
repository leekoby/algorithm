function solution(num, k) {
    let strNum = String(num);
    let cnt = 0;
    let idx=false;
    for (let i =0 ;i < strNum.length ;i++){
        if(strNum[i] === String(k)){
            idx=true
            cnt ++ ;
            break
        }
            
            cnt ++ ;
       
    
    }  
    
    return idx === true  ? cnt : -1
    
}