/*
          1
        /   \
      2       3
     / \     /  \
   4    5    6    7
*/

function solution(v) {
  let answer;
  function recursion(v) {
    if (v > 7) {
      return;
    } else {
      console.log(v)
      recursion(v * 2);
      recursion(v * 2 + 1);

    }
  }
  recursion(v);
  return answer;
}

console.log(solution(1))