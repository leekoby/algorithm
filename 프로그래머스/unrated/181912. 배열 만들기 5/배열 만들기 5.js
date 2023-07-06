function solution(intStrs, k, s, l) {
    var answer = [];
    for(const x of intStrs){
        const num = x.substr(s,l) 
        num>k ? answer.push(+num): null        
        
    }

    return answer;
}