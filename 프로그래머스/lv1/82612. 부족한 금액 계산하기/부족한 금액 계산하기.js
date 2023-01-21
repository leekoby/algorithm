
function solution(price, money, count) {
    let answer = money;
    let cost = price
    let totalCost = 0;
    for(let i = 0 ; i < count ; i ++){
        if(money > 0 ){
        console.log(price)
        
        
        money - price > 0 ?  money = money - price : null
        totalCost +=price
        price+=cost
    
        }
          
    }
    console.log(money)
    console.log(totalCost)
  
    
    return totalCost - answer > 0 ? totalCost - answer : 0
}