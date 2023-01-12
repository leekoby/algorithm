function solution(x) {
    let str = String(x)
    let arr = str.split('')
    let h = arr.reduce((a,b)=>+a+ +(+b), 0)
    console.log(x , h , x%h)
    return x % h === 0 
}