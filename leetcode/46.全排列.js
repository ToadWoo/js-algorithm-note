/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = []
    
    const backtrack = function(path){
        if(path.length === nums.length) {
            res.push(path)
        }
        nums.forEach(n=>{
            if(path.includes(n)) return
            backtrack(path.concat(n))
        })
    }

    backtrack ([])
    return res

};
// @lc code=end

