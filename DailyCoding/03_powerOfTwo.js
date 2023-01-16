/*powerOfTwo
문제
수를 입력받아 2의 거듭제곱인지 여부를 리턴해야 합니다.

입력
인자 1 : num
number 타입의 정수 (num >= 1)
출력
boolean 타입을 리턴해야 합니다.
주의 사항
반복문(while)문을 사용해야 합니다.
2의 0승은 1입니다.
Number.isInteger, Math.log2, Math.log 사용은 금지됩니다.
*/


function powerOfTwo(num) {
    // TODO: 여기에 코드를 작성합니다.
    let cnt = 0;
    let tf = false
    let check = 2;
    while (cnt <= num) {
        if (check === num || num === 1) {
            tf = true
            break
        }
        check *= 2;
        cnt++
        if (check > num) break
    }
    return tf
}


let output1 = powerOfTwo(16);
console.log(output1);
let output2 = powerOfTwo(22);
console.log(output2);