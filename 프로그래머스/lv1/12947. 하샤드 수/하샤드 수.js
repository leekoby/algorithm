function solution(x) {
    let str = String(x)
    let h = str.split('').reduce((a,b)=>+a+ +(+b), 0)
    return x % h === 0 
}