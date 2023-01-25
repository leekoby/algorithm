function solution(arr)
{
   return arr.filter((a,index) => a !== arr[index+1]);    
}