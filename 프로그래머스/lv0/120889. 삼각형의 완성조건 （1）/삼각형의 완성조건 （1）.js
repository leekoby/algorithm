// a + b < c
function solution(sides) {
    let sortSides = sides.sort((a,b)=> a-b)
    var answer = 0;
        
    
    return answer = (sortSides[0] + sortSides[1] > sortSides[2])? 1 : 2;
    
 
}