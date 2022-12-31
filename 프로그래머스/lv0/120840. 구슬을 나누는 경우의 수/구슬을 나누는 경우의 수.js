//3! = 3*2*1  6 
//n! = n*(n-1)*(n-2)......*1


function solution(balls, share) {
    
    var answer=0;
    const n=balls;
    const r=share;
    
    let nPermutation = 1;
    for (let i= n ; i>=n-r+1; i --){
        
        nPermutation*=i;
    }
    
    
    let rFactorial=1;
    for (let i=r; i>=1 ; i--)
        rFactorial *= i;
    
    
   answer=Math.floor(nPermutation/rFactorial)
    return answer;
    
    
}