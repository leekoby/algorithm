/**
 * @param {number} 
 * @return {number}
 */
const climbStairs = function(n) {
    const d = new Array(n + 1).fill(0);
    d[1] = 1;
    d[2] = 2;

    function dp(x) {
        if (d[x] !== 0) {
            return d[x];
        }
        d[x] = dp(x - 1) + dp(x - 2);
        return d[x];
    }

    return dp(n);
};


