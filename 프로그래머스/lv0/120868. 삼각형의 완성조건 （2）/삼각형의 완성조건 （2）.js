//3,6  4 5 6 , 7 8 <9

function solution(sides) {
    a = sides[0] < sides[1] ? sides[1]-sides[0]:sides[0]-sides[1] 
    b = sides[0]+ sides[1]
    console.log(a, b, b-a)
    
    
    return b-a-1
    }