function solution(num_list) {
    let sum = num_list.reduce((a,b)=>a+b,0)
    let multi = num_list.reduce((a,b)=>a*b,1)
    return sum*sum >multi ? 1:0
}