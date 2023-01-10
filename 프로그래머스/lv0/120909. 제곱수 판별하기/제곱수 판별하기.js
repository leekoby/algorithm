function solution(n) {
    var answer = 0;
    
    for(let i = 1 ; i < n ; i++){
        if(i*i === n){
            console.log(i*i)
            return 1
        }
    }
    
    return 2
}