/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const obj = new Map()
    for(let i=0; i<nums.length; i++){
        const cur = nums[i]
        if(obj.get(cur) !== undefined){
            return [obj.get(cur), i]
        }
        const num =  target - cur
        obj.set(num, i)
    }
};
// @lc code=end


