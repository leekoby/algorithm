function solution(array, n) {
    let answer = 0;
    let arr = array.sort((a,b)=>a-b)
    let subs = 999; 
    
    for(let i = 0 ; i < arr.length ; i++){
        if(Math.abs(n - arr[i]) < subs){
            subs = n-arr[i]
            answer = arr[i]
        }
        
    }
    
    return answer;
}

//[3, 10, 28] 20 ;  17 10  