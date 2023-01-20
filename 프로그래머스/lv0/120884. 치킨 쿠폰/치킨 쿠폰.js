function solution(chicken) {
    let answer = 0;
    let coupon = chicken


    for (let i = 0; coupon >= 10; i++) {
        let eaten = ~~(coupon / 10);
        answer += eaten;
        coupon = coupon % 10 + eaten


    }

    return ~~answer;

}
