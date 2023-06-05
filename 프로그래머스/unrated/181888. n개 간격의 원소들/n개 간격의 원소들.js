function solution(nl, n) {
    let arr=[]
    for(let i = 0 ; i < nl.length;i=i+n){
        arr.push(nl[i])
    }
    return arr
}