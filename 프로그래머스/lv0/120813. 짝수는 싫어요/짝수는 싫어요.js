function solution(n) {
    var answer = [];
    var arr=[]
    
    for (var i = 0 ; i <n ; i ++){
        arr[i] =arr.push(i)
        }
    for ( var i = 0; i< n; i ++)
        if(arr[i]%2 !== 0 )
            {
                answer.push(i +1)
            }
    return answer;
}