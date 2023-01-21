function solution(arr)
{
    let answer = [];
    for (let i = 1; i <= arr.length ; i++ ) {
            if ( arr[i] !== arr[i-1]) {
               answer.push(arr[i-1]) 
            }
    }
    // answer.push(arr[arr.length -1])
    
    return answer;     
}