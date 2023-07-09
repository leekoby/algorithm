function solution(str, m, c) {
    return [...str].filter((_,i)=> i%m ===c-1).join('')
}