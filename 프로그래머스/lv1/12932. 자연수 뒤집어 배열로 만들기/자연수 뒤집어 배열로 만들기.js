function solution(n) {
    let str = String(n)
    let arr = Array.from(str)
    return arr.map((a)=> Number(a)).reverse()
}