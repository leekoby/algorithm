function solution(i, j, k) {
    let answer = 0;
    let str =''
    for( let n = i ; n <=j ; n++){
            str+= n
        }
    arr= str.split('')
    arr.filter(el => +el === k ? answer++ : '')
    console.log(arr, k)
    return answer;
}