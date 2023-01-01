function solution(dot) {
    var answer = 0;
    const [x,y] = dot
    if (x > 0 && x*y > 0) return 1 
    else if( x > 0 && x*y < 0 ) return 4
    else if(y > 0 && x*y < 0) return 2    
    else return 3    
    
    

}