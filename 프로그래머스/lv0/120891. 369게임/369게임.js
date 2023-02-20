function solution(order) {
    return String(order).split('').filter(el => +el !== 0 && +el%3===0).length
       
  
}