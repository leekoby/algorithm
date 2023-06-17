function solution(arr1, arr2) {
    if(arr1.length!==arr2.length) {
        return arr1.length > arr2.length ? 1 : -1     
    }
    
    let sum1 = arr1.reduce((a,c)=>a+c,0)
    let sum2 = arr2.reduce((a,c)=>a+c,0)
    
    
    return sum1 === sum2 ? 0 : sum1> sum2 ? 1 : -1 
    
    
}