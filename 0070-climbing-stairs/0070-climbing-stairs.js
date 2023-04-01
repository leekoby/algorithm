/**
 * @param {number} 
 * @return {number}
 */
const climbStairs = function(n) {
  if (n <= 2) {
    return n;
  }

  const d = new Array(n + 1).fill(0);
  d[1] = 1;
  d[2] = 2;

  for (let i = 3; i <= n; i++) {
    d[i] = d[i - 1] + d[i - 2];
  }

  return d[n];
};


