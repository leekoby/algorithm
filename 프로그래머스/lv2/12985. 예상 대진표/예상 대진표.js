function solution(n,a,b)
{
let cnt=1;
  for(let i =1; i<n;i++){
  a=~~(a/2)+(a%2);
    b=~~(b/2)+(b%2)
    cnt =i
    if(a===b){
      return cnt
      
    }
  }
}