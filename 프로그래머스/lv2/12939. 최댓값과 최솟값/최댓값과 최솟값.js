function solution(s) {
    var answer = [];
    let arr = s.split(' ')
    console.log(arr)
    answer.push(Math.min(...arr))
    console.log(arr)
    answer.push(Math.max(...arr))
    console.log(arr)
    return answer.join(' ');
}