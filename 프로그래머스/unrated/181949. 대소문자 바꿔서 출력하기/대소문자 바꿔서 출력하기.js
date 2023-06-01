const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let answer = ''
        
    for(let i = 0; i<str.length;i++){
        if(str[i].toLowerCase() === str[i]) answer+=str[i].toUpperCase()
        else answer+=str[i].toLowerCase()
        
    }
    
    console.log(answer)
});