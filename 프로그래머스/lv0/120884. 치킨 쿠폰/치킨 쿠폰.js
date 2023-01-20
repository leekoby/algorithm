function solution(chicken) {
    let answer = 0;
    let coupon =chicken
    
    
    for(let i = 0 ; coupon >= 10 ; i ++){
            let eaten = ~~(coupon/10);
            answer += eaten;
            coupon = coupon%10 + eaten
       
        
    }
    
    return ~~answer;
    
}

// answer : 최대 서비스 치킨의 수
// eaten : 쿠폰으로 먹은 치킨의 수
// coupon : 잔여 쿠폰의 수




//     while coupon >= 10:
//         eaten = coupon//10 
//         answer += eaten 
//         coupon = coupon%10 + eaten 
//     return answer 