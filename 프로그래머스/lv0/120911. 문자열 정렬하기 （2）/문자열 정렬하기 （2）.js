function solution(my_string) {
    var answer = '';
    let strarr = my_string.toLowerCase().split("");
    let str = strarr.sort()
    console.log(str)
    return answer = str.join('');
}