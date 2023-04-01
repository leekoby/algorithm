/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let memo = [];
    function dp(n) {
        if (n === 0 || n === 1) return 0;
        if (!(n in memo)) {
            memo[n] = Math.min(dp(n - 1) + cost[n - 1], dp(n - 2) + cost[n - 2]);
        }
        return memo[n];
    }
    return Math.min(dp(cost.length), dp(cost.length));
};
