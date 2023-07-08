function solution(str, arr) {
    let newstr=str.split('')
    arr.map(v=>newstr[v]='')
 return newstr.join('')
}