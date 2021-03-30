/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 0) return 0
    if(nums.length === 1) return nums[0]

    let b1 = nums[0]
    let b2 = Math.max(nums[0], nums[1])
    for(let i=2; i< nums.length; i++){
        const tmp = b1
        b1 = b2 
        b2 = Math.max(tmp+nums[i], b2)
    }
    return b2
};
// @lc code=end

