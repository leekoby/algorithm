function solution(my_string) {
    var answer = 0;
    let str = my_string.split(/[a-zA-z \s]/g)
    console.log(str)
    
    return answer = str.reduce((acc,cur)=> acc/1 + cur/1,0);
}