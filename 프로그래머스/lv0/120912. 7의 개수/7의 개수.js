function solution(array) {
    let str = array.join('')
    let cnt =0 
    for( i =0 ; i < str.length ; i++){
        str[i] === '7' ? cnt ++ : 0
    }
    
        
        return cnt;
}