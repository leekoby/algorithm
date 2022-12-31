function solution(hp) {
    var answer = 0;
    let at5=5;
    let at3=3;
    let at1=1;
    let cnt=0;
    
    
   while (true){
       if(hp===0){
           break;
       }
       
        else if(hp >= at5){
           hp-=at5
           cnt++
       }else if( hp >= at3){
           hp-=at3
           cnt++
       }else if(hp >= at1){
           hp-=at1
           cnt++
       } 
       
      
        
   }
    return cnt;
}