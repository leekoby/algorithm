function solution(arr) {
    var answer = arr.reduce((cur, rec)=>cur+rec);
    console.log(answer)
    return answer/arr.length;
}