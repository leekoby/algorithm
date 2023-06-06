function solution(nl) {
    return +nl.filter(v=>v%2).join('') +  +nl.filter(v=>v%2===0).join('')
}