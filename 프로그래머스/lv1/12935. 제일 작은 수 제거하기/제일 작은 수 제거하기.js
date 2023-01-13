function solution(arr) {
    var answer = []
    let min = Math.min.apply(null,arr)
    for(key of arr){
        key !== min ? answer.push(key) : ''
    }
    return answer.length ===0 ? [-1] : answer;
}