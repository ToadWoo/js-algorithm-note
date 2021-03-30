/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0

    let minPrice = prices[0]

    for(let i=0; i<prices.length; i++){
        const cur = prices[i]
        if(cur >minPrice){
            profit = profit + cur-minPrice
        }
        minPrice = cur
    }

  

    return profit

};
// @lc code=end

