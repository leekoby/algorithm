function solution(num_str) {
    let num = num_str.split('')
    
    return num.reduce((a,b)=>+a + +b,0)
}