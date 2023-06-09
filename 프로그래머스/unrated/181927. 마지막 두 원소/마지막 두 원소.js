function solution(nl){
  let len =nl.length  
  nl[len-2]<nl[len-1] ? nl.push(nl[len-1]-nl[len-2]) : nl.push(nl[len-1]*2)    
    return nl
}