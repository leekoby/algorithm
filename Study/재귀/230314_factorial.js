// 반복문
// function factorial(num) {
//   let total = 1;
//   for (let i = num; i > 0; i--) {
//     total *= i
//   }
//   return total;
// }

//재귀
function factorial(num) {
  if (num === 1) return 1
  return num * factorial(num - 1);
}

console.log(factorial(4));
