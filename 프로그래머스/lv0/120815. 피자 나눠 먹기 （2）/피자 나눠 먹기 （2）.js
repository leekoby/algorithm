function solution(n) {
 
    let pizzaCnt = 1;
    
    while ( true )
        {
            if(6*pizzaCnt%n === 0){
                return pizzaCnt
            }
            
            pizzaCnt ++;
            
        }
   
}