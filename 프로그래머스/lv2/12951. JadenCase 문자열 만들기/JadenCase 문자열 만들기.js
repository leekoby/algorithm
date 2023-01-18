function solution(s) {
    var answer = '';
    let arr = s.split(' ')
    .map((item) => item?item[0].toUpperCase() + item.slice(1).toLowerCase():'')
    answer = arr.join(' ');
    return answer;
}