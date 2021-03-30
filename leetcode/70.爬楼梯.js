/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n <2) return 1;

    let b1 = 1
    let b2 = 1

    for(let i =2; i<=n; i++){
        const tmp = b1
        b1 = b2
        b2 = tmp + b2
    }
    return b2


};
// @lc code=end

