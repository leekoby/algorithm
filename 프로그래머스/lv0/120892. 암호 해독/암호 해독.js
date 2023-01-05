function solution(cipher, code) {
    let arr = cipher.split('')
    let answer = '';
    let cnt = 1;
    for (let i = 0 ; i < arr.length; i ++ ){
        
        if( cnt % code === 0 ){
        answer += arr[i];}
       cnt++
    }
    
    return answer;
}