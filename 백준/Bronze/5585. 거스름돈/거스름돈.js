const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')

let n = Number(input)
function keepTheChange(input) {

  //1000엔짜리 지폐를 냈다는 가정이 있고, 입력값으로는 지불해야 할 금액이 들어옵니다.
  let change = Number(1000 - input);
  //카운트하기 위해 변수 count에 0을 할당합니다. 
  let count = 0;

  //입력값에 배열이 들어오지 않으므로 직접 배열을 만들어줍니다.
  const joiCoins = [500, 100, 50, 10, 5, 1];

  //만든 배열의 개수만큼만 돌려줘야 합니다.
  for (let i = 0; i < joiCoins.length; i++) {
    //거스름돈이 0원이 되면 for 문을 멈춥니다.
    if (change === 0) break;

    //거스름돈과 잔돈을 나눈 몫을 셉니다.(쓰인 잔돈의 개수 세기)
    count += Math.floor(Number(change / joiCoins[i]));
    //거스름돈을 잔돈으로 나눈 나머지를 재할당합니다.
    change %= joiCoins[i];

  }

  //count를 리턴합니다.
  return count;
}
console.log(keepTheChange(n))