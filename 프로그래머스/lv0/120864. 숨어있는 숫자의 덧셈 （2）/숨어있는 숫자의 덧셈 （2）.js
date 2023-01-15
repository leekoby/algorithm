function solution(my_string) {
   
    
    return answer = my_string.split(/[A-z\s]/g).reduce((acc,cur)=> acc/1 + cur/1,0);
}