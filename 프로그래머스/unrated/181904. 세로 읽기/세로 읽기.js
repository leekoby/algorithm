function solution(str, m, c) {
    let ans=''
    for(let i = c-1 ; i < str.length; i=i+m){
        ans+=str[i]
    }
    
    
    
    return ans
}