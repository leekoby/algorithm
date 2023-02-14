function solution(s) {
    let word ='';
    return s.split(' ').map( a=>{
        word = a.split("");
        return word.map((word,index)=>{
            if(index%2) return word.toLowerCase();
            else return word.toUpperCase();
        }).join('');
    }).join(' ')
}
