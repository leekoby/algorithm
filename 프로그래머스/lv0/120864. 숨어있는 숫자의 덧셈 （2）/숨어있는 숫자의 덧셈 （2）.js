function solution(my_string) {
   
    
    return answer = my_string.split(/\D+/g).reduce((acc,cur)=> acc + cur/1,0);
}