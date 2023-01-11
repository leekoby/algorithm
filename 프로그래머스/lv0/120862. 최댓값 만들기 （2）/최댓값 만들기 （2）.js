function solution(numbers) {
    
    let answer =0;
    let maxnum = -100000000;
    
    for (let i =0 ; i < numbers.length ; i ++){
        for(let j = i+1 ; j < numbers.length ; j ++){
            console.log(maxnum)
            if(numbers[i]*numbers[j]>maxnum){
                // console.log(maxnum)
                maxnum = numbers[i]*numbers[j]
                
            }
        }
    }
        
    
    
    
    return maxnum
}