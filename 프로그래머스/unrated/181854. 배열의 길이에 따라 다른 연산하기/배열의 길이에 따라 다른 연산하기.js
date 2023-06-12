function solution(arr, n) {
    return arr.map((v,i)=> arr.length%2===0 ? ( i%2!==0 ? v+n : v ):(i%2===0?v+n:v))
}