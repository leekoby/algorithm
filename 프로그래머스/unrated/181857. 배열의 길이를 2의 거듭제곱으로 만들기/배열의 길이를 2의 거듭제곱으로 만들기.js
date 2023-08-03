function solution(arr) {
    const pow2 = [0, 2, 4, 8, 16, 32, 64, 128, 256, 512]
    const arrLen = arr.length
    let idx
    for(let i = 0 ; i < pow2.length ; i ++) {
        if(arrLen < pow2[i]) break
        idx = pow2[i]
    }
    
    const zeroArr = Array(idx).fill(0)
    
    return [...arr, ...zeroArr.slice(0, idx-arrLen)]
}