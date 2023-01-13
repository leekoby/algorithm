function solution(s) {
    
    console.log(Math.ceil(s.length/2))
    return s.length % 2 === 0 ? s.slice(s.length/2-1,s.length/2+1) : s.slice(Math.ceil(~s.length/2),Math.ceil(s.length/2))
}