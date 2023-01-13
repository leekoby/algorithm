function solution(arr, divisor) {
    var answer = [];
    let sarr = arr.sort((a,b)=>a-b)
    sarr.filter((el)=> el % divisor ===0? answer.push(el) : '')
    return answer.length > 0 ? answer : [-1];
}