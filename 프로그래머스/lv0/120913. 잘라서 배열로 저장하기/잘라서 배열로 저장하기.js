function solution(my_str, n) {
    var answer = [];
    let str = ''
    let cnt = 0
    for ( let i = 0 ; i <my_str.length ; i++){
        str += my_str[i]
        cnt ++
        if(cnt === n){
            answer.push(str)
            str =''
            cnt = 0
        }
        
        
    }
    str.length >0 ? answer.push(str): 0
    console.log(answer)
    return answer;
}