function solution(order) {
    let str = String(order)
    let newArr = str.split('')
    let answer = 0;
    
    
    for (let i = 0 ; i < newArr.length ; i++){
        if(newArr[i] !== '0' && newArr[i]%3 ===0 )
            answer++;
        
    }
    
    
    
    return answer;
}