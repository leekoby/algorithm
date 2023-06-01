function solution(n, left, right) {
    let answer = [];
    for (let i = left ; i<=right; i++){
        if(i%n<= ~~(i/n)){
            answer.push(~~(i/n)+1)
        }else{
            answer.push(1+(i%n))
        }
    }
    return answer
}