function solution(spell, dic) {
    
    spell = spell.sort().join("");
    
    dic = dic.map( a => a.split('').sort().join('')).find(e => e === spell);
    
    
    return dic !== undefined ? 1 :2 ;
}