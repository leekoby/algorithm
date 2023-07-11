function solution(arr, flag) {
   let X =[]
    for(i=0; i<flag.length; i++){
        if(flag[i]){
        X.push(...Array(arr[i]*2).fill(arr[i]))
        } else {
        X.splice(X.length-arr[i],arr[i])
        }
    }
    
    return X
}