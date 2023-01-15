function solution(n) {
    let arr = []
    let sum = 0;
    
    arr[0]= 0
    arr[1]= 1
    arr[2] = 1
    for ( let i = 3 ; i<= n ; i++){
        sum = (arr[i-1]+arr[i-2])%1234567
        arr.push(sum)
       
        sum = arr[i]
    }
    return sum
}