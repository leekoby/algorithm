function solution(numbers) {
    let sortNumber= numbers.sort((a,b)=> a-b);
    let secondMax = numbers[numbers.length-2]
    let firstMax = numbers[numbers.length-1]
    
    
    return firstMax * secondMax
    
    
}