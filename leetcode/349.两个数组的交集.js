/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const m1 = new Map()
    for(let n1 of nums1){
        if(!m1.get(n1)){
            m1.set(n1, true)
        }
    }
    const intersArr = []
    for(let n2 of nums2){
        if(m1.get(n2)){
            intersArr.push(n2)
            m1.delete(n2)
        }
    }
    return intersArr
};

intersection([1,1,2,2], [2])
// @lc code=end

