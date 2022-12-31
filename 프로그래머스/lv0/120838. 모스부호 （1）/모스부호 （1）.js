const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}

function solution(letter) {
    var answer = '';
    let currentMorse='';
    
    for ( let i = 0 ; i< letter.length ; i++){
     const item = letter[i];
     if(item===' '){
         answer += morse[currentMorse];
         currentMorse='';
     }
        
     else {
         currentMorse += item;
         
     }
        
        
        
    }
    
    answer += morse[currentMorse];
    return answer;
}