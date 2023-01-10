function solution(array, height) {
    let newArr = array.sort((a,b)=>a-b)
    let cnt = 0
   
    for( let i = newArr.length ; i >= 0 ; i--)
        if(newArr[i] > height) {
            cnt++
        }
        
    console.log(cnt)
   return cnt
}