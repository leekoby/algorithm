// a + b < c
function solution(sides) {
    let sortSides = sides.sort((a,b)=> a-b)

        
    
    return (sortSides[0] + sortSides[1] > sortSides[2])? 1 : 2;
    
 
}