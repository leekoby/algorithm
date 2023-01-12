function solution(n) {
    let str = String(n)
    return Number(str.split('').sort((a,b)=>b-a).join(''));
}