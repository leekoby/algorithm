function solution(my_string) {
    let answer = '';
   
    
    for(let i = 0 ; i < my_string.length;i++){
        char= my_string[i].charAt()
        ascii = char.charCodeAt();
        
        if(ascii >=65 && ascii <=90 ){
            answer += char.toLowerCase();
            
        } else if  (ascii >=97 && ascii <=122 ){
            answer += char.toUpperCase();}
        
    }
    
    return answer;
}