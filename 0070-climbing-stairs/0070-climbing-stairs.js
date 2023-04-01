/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
        
  const result = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    result[i] = result[i-1] + result[i-2];
  }
  return result[n]

};