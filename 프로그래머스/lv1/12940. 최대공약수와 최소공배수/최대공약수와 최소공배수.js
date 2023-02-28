function solution(n, m) {
    let gcd = 0;
    let lcm = 0;
    let num1= n;
    let num2= m;
     let remainder =1;
    if(n>m){
        [num1,num2] = [m, n]
    }

   
    
    
   while(remainder>0){
        remainder=  num2%num1 
        num2=num1
        num1=remainder
    }
    
  
    gcd= num2
    lcm = (n*m)/num2
    return [gcd, lcm]
    
    
}