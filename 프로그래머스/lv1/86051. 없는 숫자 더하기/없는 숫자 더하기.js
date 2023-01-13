function solution(numbers) {
    var answer = 0;
    
    for(let i =0 ; i<= 9; i ++ ){
        numbers.includes(i)? console.log(i) : answer+=i
        
    }
    return answer;
}