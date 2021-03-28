/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let low = 0 
    let high = n

    while(low<=high){
        const mid = Math.floor((low+high)/2)
        const res = guess(mid)
        if(res === -1){
            high = mid -1
        }else if(res === 1){
            low = mid +1
        }else{
            return mid
        }
    }

    return undefined
    
};
// @lc code=end

